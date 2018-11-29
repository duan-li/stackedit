var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_CLIENT_ID: '"386321639322-5jg5c2or22h87qq2sfvp3v0g4tmndeb1.apps.googleusercontent.com"',
  GITHUB_CLIENT_ID: '"cbf0cf25cfd026be23e1"'
})
