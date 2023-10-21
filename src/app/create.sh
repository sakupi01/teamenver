#!/bin/bash

npm init -y --scope="" 
npm install inquirer axios semver
node appGen.mjs
rm -rf node_modules
rm package.json package-lock.json