# This project is a template for a project setup using [Grunt](http://gruntjs.com/)

## Prerequisites

1. Install [node.js](http://nodejs.org).
2. npm, the Node Package Manager should be installed with node. Verify that you have `npm` on your PATH.

### Short backgrounder on npm

There are two ways of installing modules with npm: globally and locally.
* Global install are made with the -g flag of the npm install command.
  This should basically only be for installing command line tools. Like the crunt-cli (se next section).
* Local installs are what you typically want. They should typically not be checked into version control,
  because dependencies to modules can be defined in a package.json file.
  Dependencies defined in package.json will be installed (locally) automagically when you run `npm install` (without arguments)


## Installation of Grunt itself

* Install the command line interface of grunt: `npm install -g grunt-cli`

