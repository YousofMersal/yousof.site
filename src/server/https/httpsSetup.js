// const https = require('https')
// const port = process.env.PORT || 9001
// const fs = require('fs')

// async function getCerts(app) {
//   if (process.env.ENVIROMENT === 'DEV') {
//     const options = {
//       cert: fs.readFileSync('/mnt/x/Documents/certbot/selfMadeCert/localhost.crt'),
//       key: fs.readFileSync('/mnt/x/Documents/certbot/selfMadeCert/localhost.key')
//     }
//     return await options
//   } else if (process.env.ENVIROMENT === 'PROD') {
//     const options = {
//       key: process.env.PRIVATE,
//       cert: process.env.ORIGIN
//     }
//     return options
//   }
// }

// getCerts()
//   .then(res => {
//     https
//       .createServer(res, app)
//       .listen(port, () =>
//         console.log('Koala Keeper is up and running securly on port: ' + port)
//       )
//   })
//   .catch(err => console.log(err))
