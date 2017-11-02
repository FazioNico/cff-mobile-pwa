<img src="https://jobtic.ch/img/companies/323.png" height="auto" width="500px">

# CFF Mobile PWA
<blockquote>
The unofficial Swiss Train Schedule mobile PWA build with Angular & Ionicframework
</blockquote>


## Overview
This project present the performance advantage of a real [Progressive Web Application (PWA)](https://developers.google.com/web/progressive-web-apps/) VS [Conventional « Responsive » web application](https://en.wikipedia.org/wiki/Responsive_web_design). I take up the challenge and rewrite the web application of the Swiss Railways Timetable, with the latest current developers tools. For this challenge, I chose to use [Angular](https://angular.io/) and [Ionicframework](ionicframework.com), my current favorite toys to build web application & Hybrid Mobile application.

## Screenshots
<img src="https://raw.githubusercontent.com/FazioNico/cff-mobile-pwa/master/resources/imgs/screenshot-001.png" height="400px"> <img src="https://raw.githubusercontent.com/FazioNico/cff-mobile-pwa/master/resources/imgs/screenshot-002.png" height="400px"> <img src="https://raw.githubusercontent.com/FazioNico/cff-mobile-pwa/master/resources/imgs/screenshot-003.png" height="400px">

## Google Audits Score
### [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
<b>https://cff.nicolasfazio.ch</b>
![PWA Score](https://raw.githubusercontent.com/FazioNico/cff-mobile-pwa/master/resources/imgs/pwa-report.png)

<b>https://www.sbb.ch/fr/horaire.html</b>
![PWA Score](https://raw.githubusercontent.com/FazioNico/cff-mobile-pwa/master/resources/imgs/pwa-report-sbb.ch.png)

### [TestMySite](https://testmysite.withgoogle.com/intl/en-gb)
![PWA Score](https://raw.githubusercontent.com/FazioNico/cff-mobile-pwa/master/resources/imgs/testmysite.png)

## For Developpers
### Prerequisites
- NVM - [Download](https://github.com/creationix/nvm) & Install Node Version Manage
- NodeJS 7 - Download & Install Node.js and the npm package manager with NVM `$ nvm install node 7`.
- [Typescript](https://www.npmjs.com/package/typescript) Latest stable version install in Global `$ npm install -g typescript`
- [Ionic](https://ionicframework.com/) & [Cordova](https://cordova.apache.org/) - Latest stable version install in Global `$ npm install -g ionic cordova`
- And you should also have git installed to a better working flow.

### Install

```bash
$ nvm use 7
$ npm install
$ ionic serve
```

### Build developement

```bash
# To build developement PWA run:
$ ionic serve

# To build developement Native iOS run:
$ ionic cordova platform add ios # only one time
$ ionic cordova emulate ios --livereload

# To build developement Native Android run:
$ ionic cordova platform add android # only one time
$ ionic cordova emulate android --livereload
```

### Build Production

```bash
# To build production PWA run:
$ ionic build -- --prod

# To build production Native iOS run:
$ ionic cordova platform add ios # only one time
$ ionic cordova build ios --release --prod

# To build production Native Android run:
$ ionic cordova platform add android # only one time
$ ionic cordova build android --release --prod

# To build production Desktop Browser run:
$ ionic cordova platform add browser # only one time
$ ionic cordova build browser --release --prod
```

### Contribution
Feel free to contrib to my stack.
- clone/fork project
- `$ git checkout -b YOUR_BRANCH`
- do your work...
- pass test...
- pull request with your branch on the `dev` branch / or submit small fix on the `master` branch.
- i will merge it and upd project version soon as possible.


## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
