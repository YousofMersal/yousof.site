const CronJob = require('cron').CronJob

// let movieConfig = Axios.get(
//   'https://api.themoviedb.org/3/configuration?api_key=d65f7650048ab646ecf08931d26d9be4'
// )

// const job = new CronJob('*/4 * * * * *', () => {
//   Axios.get(
//     'https://api.themoviedb.org/3/configuration?api_key=d65f7650048ab646ecf08931d26d9be4'
//   )
//     .then(res => {
//       movieConfig = res
//     })
//     .catch(err => console.log(err))
// })
// job.start()
