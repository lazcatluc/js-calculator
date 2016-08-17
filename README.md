## Sample JS project with unit testing

Very small project to integrate plain JS unit testing using Karma and PhantomJS. Easiest path to get this to work:

* Install NodeJS (npm included) from https://nodejs.org/en/ (LTS version v4.5.0)
* Run
```sh
npm install karma
npm install karma-phantomjs-launcher
npm install karma-jasmine
npm install -g karma-cli
```
* Inside the root folder of this project
```sh
npm install
karma start
```
