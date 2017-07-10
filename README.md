# awesome-npx
🌟 packages and resources that work really well with https://github.com/zkat/npx 🕶

## npx itself is awesome
`npx` lets you execute npm package binaries without installing them. `npx` is the last thing you need to globally install:
`> npm i -g npx` (this command also updates npx)

Now you can execute tools from npm packages without having to install them globally:

```sh
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
```sh
> npx awesome-npx
```

## packages which work well with npx:

## useful

### [alex](https://github.com/wooorm/alex) - check text or markdown documents for insensitive or inconsiderate writing
`npx alex README.md`
`cat README.md | npx alex`

### [ghub-cli](https://github.com/js-n/ghub-cli) - redirect to a npm package's GitHub page from your terminal
`npx ghub-cli awesome-npx` will bring you right back to this page :)

### [http-server](https://github.com/indexzero/http-server) - run a static web server in your current directory
`npx http-server`

### [shx](https://github.com/shelljs/shx) - portable shell commands like ls, cp, rm
`npx shx ls`
`npx shx rm -rf /tmp`

### [sort-package-json](https://github.com/keithamus/sort-package-json) - sort your package.json keys!
`npx sort-package-json`


## node.js development

### [npm-check](https://github.com/dylang/npm-check) - interactively update npm dependencies
`npx npm-check`
`npx npm-check --skip-unused --update`


## fun

### [cowsay](https://github.com/piuccio/cowsay) - adds cow ascii art to your special message
`npx cowsay <text>`

### [figlet-cli](https://github.com/patorjk/figlet-cli) - the classic multi-line ascii text generator, with font support
`npx figlet-cli <text>`

### [workin-hard](https://github.com/jshemas/workinHard) - a clone of [hackertyper.com](http://hackertyper.com/)
`npx workin-hard`

## articles and resources
- write one and we'll link it here!

## etc
Please read the [CONTRIBUTING.md](https://github.com/js-n/awesome-npx/blob/master/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/js-n/awesome-npx/blob/master/CODE_OF_CONDUCT.md) docs. Everything in this repo is licensed [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/) unless otherwise noted. Thank you for being awesome!
