# Monty Hall Problem Paradox

> Tested on Chrome browser, build on mac with Node v12.15.0,

Web App to simulate [Monty Hall problem paradox](https://en.wikipedia.org/wiki/Monty_Hall_problem). You can **Play Game** or **Simulate Paradox** for multiple times and see results.
Codebase consist latest EcmaScript with [React](https://facebook.github.io/react/) components alongwith [Redux](https://redux.js.org/) for state management

- [ReactBootstrap](https://react-bootstrap.github.io/) is used for cosmetics.

- [Prop-Types](https://www.npmjs.com/package/prop-types) Used to react components prop's types checking

- [Webpack](https://webpack.js.org/) is used for packaging and dev-server.

- [Jest](https://jestjs.io/) used as testing framework.

- [Enzym](https://enzymejs.github.io/enzyme/docs/api/) is plugged with jest to test react component's snapshots.

## API

There are middlewares which calls api files to pretend as backend system

## Install

First, clone the repo via git:

```bash
git clone https://github.com/mizmaar3/monty-hall-problem your-folder-name
```

And then install dependencies.

```bash
$ cd your-folder-name && npm install
```

## Build

Run this command to build the project.

```bash
$ npm run start
```

It will open `http://localhost:9500` into your default browser

## Running tests

```bash
$ npm run jest
```

## TODO

- Cosmetics for game - Better UX
- Use global styling, introduce preprocessor or JSS etc
- Refactor Game component
- Refactor Result component
- Percentage bar as component
- Introduce Routes
- Move api to node app
- Release/Deploy setup
