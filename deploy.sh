#! /usr/bin/env bash

yarn run build
cp -R ./public/ ../fjgarlin.github.io/
cd ../fjgarlin.github.io
git add .
git commit -am "New build."
git push
