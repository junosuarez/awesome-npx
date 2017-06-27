#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
fs.createReadStream(path.join(__dirname, 'README.md')).pipe(process.stdout)
