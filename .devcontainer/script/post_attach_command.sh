#! /usr/bin/env bash

set -euxo pipefail

docker container exec -it ollama ollama pull gemma3n
cp -rfv config.yaml ${HOME}/.continue

fastfetch
