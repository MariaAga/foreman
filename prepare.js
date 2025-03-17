const path = require('path')
const { readFileSync } = require('fs')
const { execSync } = require('child_process')
const TMP_DIR = path.resolve(__dirname, 'public')

function initRepo(remote, branch) {
  const repoDir = path.resolve(TMP_DIR, remote.split('/')[1].split('.')[0] )
  const cloneCommand = `git clone -b ${branch} ${remote} ${repoDir} --depth 1`
  execSync(cloneCommand, { stdio: 'inherit' })
  const installCommand = `npm --prefix ${repoDir} install`
  execSync(installCommand, { stdio: 'inherit' })
}

function prepare() {
  const remotes = JSON.parse(readFileSync(path.resolve(__dirname, 'remote-modules.json'), 'utf-8'))
  remotes.forEach(({ remote, branch }) => {
    initRepo(remote, branch)
  })
}

prepare()
