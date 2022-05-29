#!/bin/bash

echo Preparing To Publish...

rm -rf storybook-static

# PACKAGE_VERSION = cat package.json | grep -m 1 version | sed 's/[^0-9.]//g'

echo Building Core...
cd ./packages/Core
rm -rf dist
yarn build

echo Publishing Core...
yarn publish --access public


echo Building Blocks...
cd ../Blocks
rm -rf dist
yarn build

echo Publishing Blocks...
yarn publish --access public

# echo Building Storybook...
# cd ../../storybook
# STORY_VERSION = cat package.json | grep -m 1 version | sed 's/[^0-9.]//g'
# yarn build-storybook

