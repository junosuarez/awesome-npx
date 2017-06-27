#!/usr/bin/env node
const https = require('https')
const url = 'https://raw.githubusercontent.com/js-n/awesome-npx/master/README.md'
https.get(url, (res) => {
  res.pipe(process.stdout)
})
.on('error', (e) => {
  console.error(e)
  process.exit(1)
})