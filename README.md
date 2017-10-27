<img src="https://jobtic.ch/img/companies/323.png" height="auto" width="500px">

# CFF Mobile PWA
<blockquote>
The unofficial Swiss Train Schedule mobile PWA build with Angular & Ionicframework
</blockquote>

***work in proccess***

## Overview
This project present the performance advantage of a real [Progressive Web Application (PWA)](https://developers.google.com/web/progressive-web-apps/) VS [Conventional « Responsive » web application](https://en.wikipedia.org/wiki/Responsive_web_design). I take up the challenge and rewrite the web application of the Swiss Railways Timetable, with the latest current developers tools. For this challenge, I chose to use [Angular](https://angular.io/) and [Ionicframework](ionicframework.com), my current favorite toys to build web application & Hybrid Mobile application.

## Install

```bash
$ nvm use 7
$ npm install
$ ionic serve
```

## Build Production

To build production PWA run:

```bash
$ ionic build -- --prod
```

To build production Native iOS run:
```bash
$ ionic cordova platform add ios
$ ionic cordova build ios --release --prod
```

To build production Native Android run:
```bash
$ ionic cordova platform add android
$ ionic cordova build android --release --prod
```

To build production Desktop Browser run:
```bash
$ ionic cordova platform add browser
$ ionic cordova build browser --release --prod
```
To build production Desktop Native run:
```bash
... coming soon ...
```

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
