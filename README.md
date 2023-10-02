# Create a web page from a Figma mockup

https://www.figma.com/file/11N4gBWJXKG4gKDBR5bjaf/Test-Fidesio?node-id=1350%3A28

## Constraints : 
* bundler - Webpack
* Responsive between 320px and 2050px ( free to interpret )
* CSS effects
* No CSS framework
* ES6 Javascript

## Installation :

*You need node.js/npm command*

```bash
npm int -y
```

### Webpack

Project files (Project structure)

```bash
touch webpack.config.js && mkdir public src && cd public && touch index.html bundle.js && cd .. && cd src && touch index.js && cd ..
```
```bash
mkdir assets && cd assets && mkdir fonts icons images stylesheets && cd ..
```

#### Install

```bash
npm install --save-dev webpack@latest webpack-dev-server@latest
```
#### Config

Add to `webpack.config.js`

```javascript
const webpack = require("webpack");
const path = require("path");

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js"
  }
}

module.exports = config;
```

Add to `public/index.html`

```html
<script src="bundle.js"></script>
```

Let's try 
```bash 
webpack
```

*If you don’t have Webpack*
```bash 
npm install -g webpack@latest 
```

#### Automation

If you don't repeat the Webpack command to see the new changes

```bash 
webpack --watch
```
or
change `package.json`
```
"scripts": {
    "watch": "webpack --watch"
  }
```
```bash 
npm run watch
```