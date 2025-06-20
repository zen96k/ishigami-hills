#! /usr/bin/env bash

set -euxo pipefail

docker container exec -it wn-ollama ollama pull gemma3:4b
cp -rfv config.yaml ${HOME}/.continue

fastfetch
