# awesome-npx [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

🌟 packages and resources that work really well with https://github.com/zkat/npx 🕶

## ✨ npx itself is awesome
`npx` lets you execute npm package binaries without installing them. `npx` is the last thing you need to globally install:
`> npm i -g npx` (this command also updates npx)

Now you can execute tools from npm packages without having to install them globally:

```
> npx cowsay wow
npx: installed 1 in 1.413s
 _____
< wow >
 -----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

you can even use `npx` to view this list of `awesome-npx` tools:
```
> npx awesome-npx
```


## 📦 packages which work well with npx:

## 🛠 useful

### [alex](https://github.com/wooorm/alex) - check text or markdown documents for insensitive or inconsiderate writing
`npx alex README.md`
`cat README.md | npx alex`

### [decode-zhuyin](https://github.com/tpai/decode-zhuyin) - decode Chinese word to Zhuyin password
`npx decode-zhuyin <text>`

### [goops](https://github.com/captainsafia/goops) - add gitignore rules heuristically based on files in your current directory
`npx goops`

### [http-server](https://github.com/indexzero/http-server) - run a static web server in your current directory
`npx http-server`

### [json-server](https://github.com/typicode/json-server) - run a mock REST API server with JSON-based response configuration
`npx json-server https://raw.githubusercontent.com/typicode/jsonplaceholder/master/data.json`

### [NodeSchool Workshoppers](https://nodeschool.io/#workshoppers) - Learn something new!
`npx learnyounode`
`npx how-to-npm`
`npx git-it`
`npx elementary-electron`

### [okimdone](https://github.com/zkat/okimdone) - execute a long-running command and be told out loud when it's done
`npx okimdone npm install`

### [pa11y](https://github.com/pa11y/pa11y) - check websites for accessibility issues
`npx pa11y http://example.com`

### [shx](https://github.com/shelljs/shx) - portable shell commands like ls, cp, rm
`npx shx ls`
`npx shx rm -rf /tmp`

### [strip-ansi-cli](https://github.com/chalk/strip-ansi-cli) - remove terminal color codes from piped text
`echo -e "\033[33m hello" | npx strip-ansi-cli`


## 🐢🚀 node.js development

### [dist-upgrade](https://github.com/zacanger/dist-upgrade) - install the latest global node and npm
`npx dist-upgrade`

### [npm-check](https://github.com/dylang/npm-check) - interactively update npm dependencies
`npx npm-check`
`npx npm-check --skip-unused --update`

### [nsp](https://github.com/nodesecurity/nsp) - scan your npm project for vulnerabilities and security alerts
`npx nsp check`

### [snyk](https://github.com/snyk/snyk) - scan for vulnerabilities in your project and its dependencies and even fix them (requires account with service)
`npx snyk test`
`npx snyk monitor`

### [sort-package-json](https://github.com/keithamus/sort-package-json) - sort your package.json keys
`npx sort-package-json`


## 😺 fun

### [benny-hill](https://npm.im/benny-hill) - plays benny-hill theme music while a command is running
`npx benny-hill npm test`

### [cowsay](https://github.com/piuccio/cowsay) - adds cow ascii art to your special message
`npx cowsay <text>`

### [figlet-cli](https://github.com/patorjk/figlet-cli) - the classic multi-line ascii text generator, with font support
`npx figlet-cli <text>`

### [lolcatjs](https://github.com/robertboloc/lolcatjs) - colorful rainbow text from a file or stdin
`echo hello | npx lolcatjs --animate` `cat /dev/urandom | base64 | npx lolcatjs`

### [qrip](https://github.com/watilde/qrip) - generate QR codes in your terminal
`npx qrip https://random.cat` `npx qrip "$(npm info qrip homepage)"`

### [workin-hard](https://github.com/jshemas/workinHard) - a clone of [hackertyper.com](http://hackertyper.com/)
`npx workin-hard`


## 📰 articles and resources
- [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- write one and we'll link it here!


## 📇 etc
Please read the [CONTRIBUTING.md](https://github.com/js-n/awesome-npx/blob/master/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/js-n/awesome-npx/blob/master/CODE_OF_CONDUCT.md) docs. Everything in this repo is licensed [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/) unless otherwise noted. Thank you for being awesome!
