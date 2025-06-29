#! /usr/bin/env bash

set -euxo pipefail

docker container exec -it ih-ollama ollama pull gemma3n
docker container exec -it ih-ollama ollama pull phi4-mini
cp -rfv config.yaml ${HOME}/.continue

fastfetch
