#! /usr/bin/env bash

set -euxo pipefail

export DEBIAN_FRONTEND=noninteractive

SCRIPT_DIRNAME=$(cd $(dirname ${0}) && pwd)
PROJECT_DIRNAME=$(cd ${SCRIPT_DIRNAME}/../.. && pwd)

HUGO_DIRNAME=${PROJECT_DIRNAME}/web

cd ${PROJECT_DIRNAME}

rm -rf ${HOME}/.gitconfig
git config --global init.defaultBranch ${GIT_INIT_DEFAULT_BRANCH}
git config --global user.name ${GIT_USER_NAME}
git config --global user.email ${GIT_USER_EMAIL}

docker compose up -d --pull always --force-recreate -V

cd ${HUGO_DIRNAME}
rm -rf public resources .hugo_build.lock
