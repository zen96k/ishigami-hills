#! /usr/bin/env bash

set -euxo pipefail

pip3 install -r requirements.txt --break-system-packages
uvicorn main:app --host 0.0.0.0
