# Cypress-Angular-Coverage-Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Run development server & cypress

Run `npm run dev` for a dev server to start and lunch Cypress test runner.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 
 
## Running the app in development mode

Run `npm start` to start the app on `http://localhost:4200/`

## Running cypress test runner only

Run `npm run cy:open` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).


# Get code coverage on an angular clean install

- Create a new angular app using angular cli
```
ng new cypress-angular-coverage-example
```
- Install cypress-schematic to switch from protractor to cypress e2e framework
```
npm i -D  @briebug/cypress-schematic
```
- Switch to cypress from protractor
```
ng g @briebug/cypress-schematic:cypress true
```
- Install ngx-build-plus to extends the Angular CLI's build process and instrument the code
```
npm i -D ngx-build-plus
```
- Add webpack coverage config file coverage.webpack.js to cypress folder
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: require('path').join(__dirname, '..', 'src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/,
          /(ngfactory|ngstyle)\.js/
        ]
      }
    ]
  }
};
```
- Update angular.json to use ngx-build with extra config
```
"serve": {
          "builder": "ngx-build-plus:dev-server",
          "options": {
            "browserTarget": "cypress-angular-coverage-example:build",
            "extraWebpackConfig": "./cypress/coverage.webpack.js"
          },
```
- Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
```
npm i -D istanbul-instrumenter-loader

```
- Add cypress code coverage plugin
```
  npm install -D @cypress/code-coverage
````
- Then add the code below to your supportFile and pluginsFile
```
// cypress/support/index.js
import '@cypress/code-coverage/support'
```
```
// cypress/plugins/index.js
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
```
##  Voilà !
##  You got angular coverage for your e2e tests written in cypress with typescript.

