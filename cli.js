#!/usr/bin/env node
const fs = require('fs')
fs.createReadStream('./README.md').pipe(process.stdout)
