# angularjs-webpack

A complete, yet simple, starter for Angular using Webpack.

This workflow serves as a starting point for building Angular 1.x applications using Webpack 2.x.

* Modified https://github.com/preboot/angular-webpack for my own usage.
    - Added SASS/SCSS
    - Modified folder structure, following Todd Motto's styleguide
    - Changed some parts of the config to meet the latest webpack 2 requirements
    - Added UI Router
    - Responsive Navbar with Bootstrap
    - Footer
    
* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.



### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/brood915/ngBoilerplate.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

