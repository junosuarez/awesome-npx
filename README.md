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

### [ghub-cli](https://github.com/js-n/ghub-cli) - redirect to a npm package's GitHub page from your terminal
`npx ghub-cli awesome-npx` will bring you right back to this page :)

### [http-server](https://github.com/indexzero/http-server) - run a static web server in your current directory
`npx http-server`

### [lessmd](https://github.com/linuxenko/lessmd) - render and display markdown files in the terminal
`npx lessmd README.md`
`npx awesome-npx | npx lessmd`

### [okimdone](https://github.com/zkat/okimdone) - execute a long-running command and be told out loud when it's done
`npx okimdone npm install`

### [shx](https://github.com/shelljs/shx) - portable shell commands like ls, cp, rm
`npx shx ls`
`npx shx rm -rf /tmp`

## 🐢🚀 node.js development

### [npm-check](https://github.com/dylang/npm-check) - interactively update npm dependencies
`npx npm-check`
`npx npm-check --skip-unused --update`

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
`echo hello | npx lolcatjs --animate` `npx lolcatjs /dev/urandom`

### [workin-hard](https://github.com/jshemas/workinHard) - a clone of [hackertyper.com](http://hackertyper.com/)
`npx workin-hard`

## 📰 articles and resources
- [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- write one and we'll link it here!

## 📇 etc
Please read the [CONTRIBUTING.md](https://github.com/js-n/awesome-npx/blob/master/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/js-n/awesome-npx/blob/master/CODE_OF_CONDUCT.md) docs. Everything in this repo is licensed [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/) unless otherwise noted. Thank you for being awesome!
