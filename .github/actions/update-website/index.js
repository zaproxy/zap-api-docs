const path = require('path')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')
const io = require('@actions/io')
const { Octokit } = require("@octokit/rest")

async function git(dir, args, options) {
  return exec.exec('git', args, { ...{ cwd: dir, silent: true }, ...options })
}

function getRequiredInput(name) {
  return core.getInput(name, { required: true })
}

async function run() {
  try {
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo

    const docsDir = path.resolve(process.env.GITHUB_WORKSPACE, repo)
    const websiteRepoName = getRequiredInput('repo')
    const websiteDir = path.resolve(process.env.GITHUB_WORKSPACE, websiteRepoName)
    const websiteDocsDir = path.resolve(websiteDir, 'docs/api')

    await io.rmRF(websiteDocsDir)
    await io.cp(path.resolve(docsDir, 'build'), websiteDocsDir, { recursive: true })

    const code = await git(websiteDir, ['diff-index', '--quiet', 'HEAD'], { ignoreReturnCode: true })
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

    const octokit = new Octokit({ auth: authToken })

    const pulls = await octokit.pulls.list({
      ...pullRequestParams,
      state: 'open'
    })

    let pullId
    if (pulls.data.length !== 0) {
      pullId = pulls.data[0].id
    }

    const gitHubBaseUrl = `https://${user}:${authToken}@github.com`
    const title = 'Update API docs'
    const body = `From:\n${owner}/${repo}@${github.context.sha}`
    const commitMessage = `${title}\n\n${body}`

    await git(websiteDir, ['config', 'user.name', user])
    await git(websiteDir, ['config', 'user.email', email])
    await git(websiteDir, ['remote', 'set-url', 'origin', `${gitHubBaseUrl}/${user}/${websiteRepoName}`])
    await git(websiteDir, ['checkout', '-b', branch])
    await git(websiteDir, ['add', '.'])
    await git(websiteDir, ['commit', '-sm', commitMessage])
    await git(websiteDir, ['push', '-f', 'origin', branch])

    if (pullId) {
      await octokit.pulls.update({
        owner: owner,
        repo: websiteRepoName,
        pull_number: pullId,
        body: body,
      })
    } else {
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
