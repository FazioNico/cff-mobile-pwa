<svg margin="0px" padding="0px;" height="auto" width="400px" class="mod_header_logo_content" viewBox="0 0 187 21" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M73.06 8.227c-.165-1.49-.993-2.17-2.667-2.17-1.427 0-2.314.658-2.314 1.71 0 .878.556 1.404 1.693 1.622l2.48.46c2.646.48 4.073 1.97 4.073 4.252 0 2.87-2.193 4.71-5.665 4.71-3.678 0-5.785-1.885-5.847-5.195h2.935c.186 1.907 1.073 2.72 3.037 2.72 1.51 0 2.584-.835 2.584-1.995 0-.92-.58-1.49-1.696-1.71l-2.25-.437c-2.875-.57-4.2-1.887-4.2-4.23 0-2.673 2.027-4.382 5.334-4.382 3.245 0 5.25 1.73 5.33 4.644H73.06zM84.594 3.89c3.015 0 4.73 1.36 4.73 3.724 0 1.294-.577 2.257-1.92 3.003 1.714.678 2.44 1.82 2.44 3.704 0 2.563-1.904 4.185-4.92 4.185h-6.49V3.89h6.16zm-.416 5.85c1.468 0 2.317-.613 2.317-1.644 0-1.182-.767-1.732-2.358-1.732h-2.81V9.74h2.85zm.124 6.29c1.716 0 2.564-.637 2.564-1.95 0-1.38-.828-1.997-2.708-1.997h-2.83v3.947h2.974zM98.194 3.89c3.015 0 4.73 1.36 4.73 3.724 0 1.294-.577 2.257-1.92 3.003 1.714.678 2.44 1.82 2.44 3.704 0 2.563-1.903 4.185-4.92 4.185H91.97V3.89h6.224zm-.416 5.85c1.468 0 2.316-.613 2.316-1.644 0-1.182-.766-1.732-2.357-1.732h-2.87V9.74h2.91zm.124 6.29c1.715 0 2.564-.637 2.564-1.95 0-1.38-.828-1.997-2.71-1.997h-2.89v3.947h3.036zM120.96 13.355c-.205 3.353-2.505 5.456-5.956 5.456-3.864 0-6.41-3-6.41-7.58 0-4.56 2.61-7.647 6.47-7.647 3.31 0 5.527 1.95 5.772 5.04h-2.853c-.33-1.665-1.295-2.477-2.897-2.477-2.177 0-3.595 1.97-3.595 5.062 0 3.047 1.398 5.063 3.534 5.063 1.767 0 2.75-.92 3.062-2.915h2.874zm4.89-6.837v3.44h6.08v2.544h-6.08v6.003h-2.878V3.89h9.553v2.628h-6.676zm12.04 0v3.44h6.158v2.544h-6.158v6.003h-2.877V3.89h9.635v2.628h-6.758zM154.414 6.518v3.44h6.22v2.544h-6.22v6.003h-2.898V3.89h9.717v2.628h-6.82zm12.293 0v3.44h6.18v2.544h-6.18v6.003h-2.902V3.89h9.68v2.628h-6.778zm16.73 1.71c-.166-1.492-.993-2.17-2.676-2.17-1.426 0-2.317.657-2.317 1.71 0 .877.56 1.403 1.698 1.62l2.49.46c2.654.482 4.082 1.973 4.082 4.254 0 2.87-2.2 4.71-5.682 4.71-3.69 0-5.8-1.885-5.862-5.195h2.94c.185 1.907 1.08 2.72 3.047 2.72 1.516 0 2.593-.835 2.593-1.995 0-.92-.58-1.49-1.698-1.71l-2.26-.437c-2.883-.57-4.208-1.887-4.208-4.23 0-2.673 2.028-4.382 5.345-4.382 3.255 0 5.268 1.73 5.35 4.644h-2.84z" fill="#000"></path>
    <path d="M0 0h59.233v20.603H0V0z" fill="#EC0000"></path>
    <path d="M35.186 17.02h3.75l-5.047-5.163h6.265v5.163h2.96v-5.163h6.267l-5.05 5.163h3.752l6.427-6.708-6.426-6.73h-3.752l5.05 5.185h-6.266V3.583h-2.96v5.184h-6.267l5.047-5.184h-3.75l-6.43 6.73 6.43 6.707" fill="#FFF"></path>
  </g>
</svg>

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
