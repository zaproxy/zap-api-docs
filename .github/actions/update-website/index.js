const path = require('path')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')
const io = require('@actions/io')
const Octokit = require("@octokit/rest")

async function git(dir, args, options) {
  return exec.exec('git', args, { ...{ cwd: dir, silent: true }, ...options })
}

async function run() {
  try {
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo

    const docsDir = path.resolve(__dirname, repo)
    const websiteRepoName = core.getInput('repo')
    const websiteDir = path.resolve(__dirname, websiteRepoName)
    const websiteDocsDir = path.resolve(websiteDir, 'docs/api')

    await io.rmRF(websiteDocsDir)
    await io.cp(path.resolve(docsDir, 'build'), websiteDocsDir, { recursive: true })

    const code = await git(websiteDir, ['diff-index', '--quiet', 'HEAD'], { ignoreReturnCode: true })
    if (code === 0) {
      return
    }

    const user = core.getInput('user')
    const email = core.getInput('email')
    const authToken = process.env.AUTH_TOKEN
    const gitHubBaseUrl = `https://${user}:${authToken}@github.com`
    const branch = 'update-api-docs'
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

    const octokit = new Octokit({ auth: authToken })
    await octokit.pulls.create({
      owner: owner,
      repo: websiteRepoName,
      base: core.getInput('branch'),
      head: `${user}:${branch}`,
      title: title,
      body: body,
    })

  }
  catch (error) {
    core.setFailed(error.message)
  }

}

run()
