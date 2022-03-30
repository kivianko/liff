#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
npm run build

cd docs && cp index.html 404.html

git add -A
git commit -m 'deploy'

git push -f origin master

# https://<USERNAME>.github.io にデプロイする場合
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://<USERNAME>.github.io/<REPO> にデプロイする場合
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -