#! /usr/bin/env bash

set -euxo pipefail

export DEBIAN_FRONTEND=noninteractive

SCRIPT_DIRNAME=$(cd $(dirname ${0}) && pwd)
PROJECT_DIRNAME=$(cd ${SCRIPT_DIRNAME}/../.. && pwd)

cd ${PROJECT_DIRNAME}

docker container exec ih-ollama ollama pull gemma3
cp -rfv config.yaml ${HOME}/.continue

apt update && apt full-upgrade -y

fastfetch
