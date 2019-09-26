Demo WebDriverIO with Cucumber
=================

Fork from: https://github.com/WarleyGabriel/demo-webdriverio-cucumber.

These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)  

Requirements
---------------

## Node.js

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

For macOS, you can install **nvm** via brew, then install **node** via nvm:

```bash
brew install nvm
```

load nvm: (you can also copy and paste to your shell rc file e.g. `.bash_profile`)

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
```

install node.js and yarn:

```bash
nvm install 10
nvm use 10
npm install -g yarn
```

## Selenium

if you want to run e2e test locally, make sure you have jdk installed:

```bash
brew cask install java
```

Getting Started
---------------

Install the dependencies:

```bash
yarn install
```

In `wdio.conf.js` file configure the host of the Selenium Server `hostname` (default: `localhost`).  

Run e2e tests:

```bash
yarn tests:e2e
```

Reports
---------------

![alt text](./images/allure-report.png)

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
yarn report:open
```

If you want to clear the report folder, use:

```bash
yarn report:clear
```

Eslint and Prettier
---------------

Run check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```
