#!/bin/bash

echo Preparing To Publish...

rm -rf dist
rm -rf storybook-static

PACKAGE_VERSION = cat package.json | grep -m 1 version | sed 's/[^0-9.]//g'

echo Building Core...
cd ./packages/Core
CORE_VERSION = cat package.json | grep -m 1 version | sed 's/[^0-9.]//g'
yarn build

echo Publishing Core...
yarn publish --access public


echo Building Blocks...
cd ../Blocks
BLOCKS_VERSION = cat package.json | grep -m 1 version | sed 's/[^0-9.]//g'
yarn build

echo Publishing Blocks...
yarn publish --access public

# echo Building Storybook...
# cd ../../storybook
# STORY_VERSION = cat package.json | grep -m 1 version | sed 's/[^0-9.]//g'
# yarn build-storybook

