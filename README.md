Demo WebDriverIO with Cucumber
=================

**Demo WebDriverIO** is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com).  
These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)  

Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

For macOS, use following script to get **node** and **yarn**:

```bash
brew install nvm
nvm install 10
nvm use 10
npm install -g yarn
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
