#! /usr/bin/env bash

# Build new copy.
yarn run build

# Bring github.io repo and override public folder.
NEWFOLDER=/tmp/$(date '+%Y%m%d%H%M%S')
CURRENTFOLDER=$(pwd)

mkdir $NEWFOLDER
cd $NEWFOLDER
git clone git@github.com:fjgarlin/fjgarlin.github.io.git .

# Remove existing files for a clean reset.
git rm -rf .
git clean -fxd

cp -R $CURRENTFOLDER/public/ $NEWFOLDER

git add .
git commit -am "New build: $(date '+%Y%m%d%H%M%S')."
git push

cd $CURRENTFOLDER
rm -rf $NEWFOLDER
