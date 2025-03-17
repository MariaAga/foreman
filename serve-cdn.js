// const { readFileSync }  = require('fs')
// const concurrently = require('concurrently')
// const path = require('path')

// const TMP_DIR = path.resolve(__dirname, 'tmp1')

// function serveCDN() {
//   const remotes = JSON.parse(readFileSync(path.resolve(__dirname, 'remote-modules.json'), 'utf-8'))
//   let port = 8005
//   concurrently(remotes.map(({ remote }) => {
//     port += 1
//     const id = remote.split('/')[1].split('.')[0]
//      return {
//       cwd: path.resolve(TMP_DIR, id ),
//       command: `npm run static -- --port ${port}`,
//       name: id,
//     }
//   }))
// }

// serveCDN()