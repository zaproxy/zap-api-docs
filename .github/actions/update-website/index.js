const path = require('path')
const core = require('@actions/core')
const exec = require('@actions/exec')
const { getOctokit, context } = require('@actions/github')
const io = require('@actions/io')

async function git(dir, args, options) {
  return exec.exec('git', args, { ...{ cwd: dir }, ...options })
}

function getRequiredInput(name) {
  return core.getInput(name, { required: true })
}

async function run() {
  try {
    const owner = context.repo.owner
    const repo = context.repo.repo

    const docsDir = path.resolve(process.env.GITHUB_WORKSPACE, repo)
    const websiteRepoName = getRequiredInput('repo')
    const websiteDir = path.resolve(process.env.GITHUB_WORKSPACE, websiteRepoName)
    const websiteDocsDir = path.resolve(websiteDir, 'docs/api')

    await io.rmRF(websiteDocsDir)
    await io.cp(path.resolve(docsDir, 'build'), websiteDocsDir, { recursive: true })

    core.info('Checking for changes...')
    await git(websiteDir, ['add', '.'])
    const code = await git(websiteDir, ['diff-index', '--cached', '--quiet', 'HEAD', '--'], { ignoreReturnCode: true })
    core.info(`Result: ${code}`)
    if (code === 0) {
      return
    }

    const user = getRequiredInput('user')
    const email = getRequiredInput('email')
    const authToken = process.env.AUTH_TOKEN
    const branch = 'update-api-docs'
    const pullRequestParams = {
      owner: owner,
      repo: websiteRepoName,
      base: getRequiredInput('branch'),
      head: `${user}:${branch}`
    }

    const octokit = getOctokit(authToken).rest;

    const pulls = await octokit.pulls.list({
      ...pullRequestParams,
      state: 'open'
    })

    let pullNumber
    if (pulls.data.length !== 0) {
      pullNumber = pulls.data[0].number
      core.info(`Found existing pull request: #${pullNumber}`)
    }

    const gitHubBaseUrl = 'https://github.com'
    const title = 'Update API docs'
    const body = `From:\n${owner}/${repo}@${context.sha}`
    const commitMessage = `${title}\n\n${body}`

    core.info('Setting user configs...')
    await git(websiteDir, ['config', '--local', 'user.name', user])
    await git(websiteDir, ['config', '--local', 'user.email', email])
    const authHeader = `Authorization: Basic ${Buffer.from(`${user}:${authToken}`).toString('base64')}`
    await git(websiteDir, ['config', '--local', `http.${gitHubBaseUrl}/.extraheader`, authHeader], { silent: true })
    core.info('Changing remote...')
    await git(websiteDir, ['remote', 'set-url', 'origin', `${gitHubBaseUrl}/${user}/${websiteRepoName}`])
    core.info('Checking out branch...')
    await git(websiteDir, ['checkout', '-b', branch])
    core.info('Committing...')
    await git(websiteDir, ['commit', '-sm', commitMessage])
    core.info('Pushing...')
    await git(websiteDir, ['push', '-f', 'origin', branch])

    if (pullNumber) {
      core.info('Updating pull request...')
      await octokit.pulls.update({
        owner: owner,
        repo: websiteRepoName,
        pull_number: pullNumber,
        body: body,
      })
    } else {
      core.info('Creating pull request...')
      await octokit.pulls.create({
        ...pullRequestParams,
        title: title,
        body: body,
      })
    }

  }
  catch (error) {
    core.setFailed(error.message)
  }

}

run()
