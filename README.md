# Spryly


* [About spryly](#about-spryly)
* [Quick install](#quick-install)
* [Project structure](#project-structure)
* [UI Components](#ui-components)
* [Routines](#routines)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Documentation](#documentation)
* [Frequently asked questions](#faq)

## About spryly
Spryly (code name solarr-app) is the first application built in top of Solarr Api. In this repo you are going to find the following tools for devs:

* Ready to go build system using [Webpack](https://webpack.github.io/docs/) for working with [TypeScript](http://www.typescriptlang.org/).
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* Code Coverage with [Istanbul](https://github.com/gotwarlost/istanbul)
* End-to-end Angular 2 code using [Protractor](https://angular.github.io/protractor/).
* Stylesheets with [SASS](http://sass-lang.com/) indented syntax.
* Error reported with [TSLint](http://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer).
* Documentation with [TypeDoc](http://typedoc.io/).

>Warning: Make sure you're using the latest version of Node.js and NPM




### Quick Install

> Go to your terminal and do the following steps

```bash
# clone our repo
$ git clone https://github.com/bunnyinc/solarr-app spryly

# change directory to your app
$ cd spryly

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

# Project structure

> !GIT = Not available in source control this folders and files are generated trough the different routines in the environment
```
dist                    --> Package builded for deploy !GIT
node_modules            --> Libraries !GIT
typings                 --> Typescript typings !GIT
src/                    --> All of the source files for the application
    style                --> Sass styles
    public/              --> Public files
        img             ---> Images
        index.html      ---> Main index
    app/                --> All app specific modules
      app.component.html -->Main Html of the app
      app.component.ts      --> Define modules  , routes and the main component
      globals.ts                     --> Global variables depending on the environment
    main.ts             --> Bootstrap the app
    polyfills.ts        --> Polyfills that allow plugins to run smoothly
    vendor.ts           --> The perfect place to link plugins styles, etc
    analytics.js         --> A single file to include all analytics scripts
.gitignore              --> Ignore files in git
karma-shim.js           --> Shim for karma
karma.conf.js           --> Config for karma
package.json            --> Include the dependencies and routines
protactor.conf.js       --> Protactor config file
README.md               --> this
tsconfig.json           --> Typescript configuration
tslint.json             --> Config for typescript linter
typedoc.json            --> Config for typedoc
typings.json            --> Typings deps
webpack.config.js       --> Config for this amazing bundler
```


# UI Components

We are using [ng2-bootstrap ](https://valor-software.com/ng2-bootstrap) and plain bootstrap , styles of the components are modified via sass/theme.sass and sass/variables.sass.  

>Pro tip: Be wise using the ng2-bootstrap components; it's better for our code to write <a class="btn btn-danger">Button</a> than import a directive just to show a button


# Routines

## Running the app

After you have installed all dependencies you can now run the app with:

```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (for TDD style development): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.io/)) for your code with the following:
```bash
npm run docs
```

# FAQ

#### Do I need to add script / link tags into index.html ?

No, Webpack will add all the needed Javascript bundles as script tags and all the CSS files as link tags. The advantage is that you don't need to modify the index.html every time you build your solution to update the hashes.

#### How to include external angular 2 libraries ?

It's simple, just install the lib via npm and import it in your code when you need it. Don't forget that you need to configure some external libs in the main.ts file that bootstrap the application.

### How to include external css files such as bootstrap.css ?

Just install the lib and import the css files in vendor.ts. For example this is how to do it with bootstrap:

```sh
npm install bootstrap --save
```

And in vendor.ts add the following:

```ts
import 'bootstrap/dist/css/bootstrap.css';
```


