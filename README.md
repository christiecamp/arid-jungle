<p align="center">
<img src="./prowling-predator/branding/header.png"/>
</p>

[![license: mit](https://img.shields.io/badge/license-mit-darkgreen?)](https://opensource.org/licenses/MIT) 
[![node.js badge](https://img.shields.io/badge/node-lightgreen?logo=nodedotjs&logoColor=white&style=flat)](https://nodejs.org/en)
[![express.js badge](https://img.shields.io/badge/express-yellow.svg?&logo=Express&logoColor=white)](https://expressjs.com/)
[![webpack badge](https://img.shields.io/badge/webpack-lightyellow.svg?&logo=Webpack&logoColor=white)](https://webpack.js.org/)
[![babel badge](https://img.shields.io/badge/babel-silver.svg?&logo=Babel&logoColor=white)](https://www.npmjs.com/package/Babel)
[![canva badge](https://img.shields.io/badge/canva-darkgreen.svg?&logo=Canva&logoColor=white)](https://canva.com/)

![view badge](https://img.shields.io/badge/view-darkmode-black.svg?&logo=Github&logoColor=white)


### ![table-of-contents](./prowling-predator/branding/toc.png)

  - [OVERVIEW](#overview)
    - [*user story*](#user-story)
    - [*acceptance criteria*](#acceptance-criteria)
    - [*predator list*](#predator-list)
  - [INSTALLATION](#installation)
  - [USAGE](#usage)
    - [*screenshot*](#screenshot)
    - [*demo*](#demo)
  - [SOURCES](#sources)
  - [LICENSE](#license)
  - [LINKS](#links)
  - [CONNECT](#connect)

### ![overview](./prowling-predator/branding/1.png)

`AVID JUNGLE` is a single-page text editor app (meeting [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) criteria) that runs in the browser, and will function offline. The app uses [Express.js](https://www.npmjs.com/package/express) for **routing**, [webpack](https://webpack.js.org/) to **budle** JavaScript files for usage in the browser, and [idb](https://www.npmjs.com/package/idb) for **storing & retrieving data**.

>The [.npmrc](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc) file will set config values specific to this project, and ensures the app will deploy properly to [Heroku](https://www.heroku.com).


### ![user-story](./prowling-predator/branding/9.png)
<!-- <p align="center">
  <img src="./prowling-predator/branding/user-story.png"/>
</p> -->

### ![acceptance-criteria](./prowling-predator/branding/10.png)
<!-- <p align="center">
  <img src="./prowling-predator/branding/ac.png"/>
</p> -->

### ![predator-list](./prowling-predator/branding/11.png)
<!-- <p align="center">
  <img src="./prowling-predator/branding/killer-list.png"/>
</p> -->

#

### ![installation](./prowling-predator/branding/2.png)

The application is invoked using the following commands:

##### *Clone the repository in your local development enviornment*

```
git clone https://github.com/christiecamp/avid-jungle.git
```

##### *Navigate to the CLI and input:*

```javascript
npm i
```
#

### ![usage](./prowling-predator/branding/3.png)

**INSTRUCTIONS:**

1. Open the Integrated Terminal and follow the [installation](#installation) guidelines


      ##### view [demo videos](#demo) for further help


### ![screenshot](./prowling-predator/branding/12.png)
             
##### *screenshot demonstrates `AVID JUNGLE's` back end*
<!-- <p align="center">
<img src="./prowling-predator/demo/ss.png"/>
</p> -->

### ![demo](./prowling-predator/branding/13.png)


#

### ![sources](./prowling-predator/branding/4.png)

Here's a list of technologies used:

1. [Node.js](https://nodejs.org/en) - an open-source, cross-platform JavaScript runtime environment.

2. [Express.js](<(https://expressjs.com)>) - a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

3. [Webpack]() - a JavaScript module bundler that is commonly used with [React](https://react.dev/) to bundle and manage dependencies, with help from:
    * [webpack-cli](https://www.npmjs.com/package/webpack-cli)
    * [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
    * [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest)
    * [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
    * [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

3. [Concurrently]()

4. [if-env]()

5. [Webpack]()
    webpack-cli
    webpack-dev-server
    webpack-pwa-manifest
    workbox-webpack-plugin
    html-webpack-plugin

6. [style-loader]
7. [http-server]
8. idb
9. css-loader
10. babel/core
    babel/plugin-proposal-object-rest-spread
    babel/plugin-transform-runtime
    babel/preset-env
    babel/runtime
    babel-loader
11. css-loader
12. code-mirror-themes

13. [Nodemon](https://www.npmjs.com/package/nodemon) - a Node.js tool that helps develop applications by automatically restarting the node application when file changes in the directory are detected.

14. [Heroku](https://heroku.com) - used to deploy, manage, and scale the application.