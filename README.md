## Sample JS project with unit testing

Very small project to integrate plain JS unit testing using Karma and PhantomJS. Easiest path to get this to work:

* Install NodeJS (npm included) from https://nodejs.org/en/ (LTS version v4.5.0)
* Run
```sh
npm install karma --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-jasmine --save-dev
npm install -g karma-cli
```
* Inside the root folder of this project
```sh
npm install
karma start
```
