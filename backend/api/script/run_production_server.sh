#! /usr/bin/env bash

set -euxo pipefail

pip3 install uv

find . -type d -name "__pycache__" -exec rm -rf {} +
find . -type f -name "*.pyc" -delete
rm -rf .venv
uv sync

source .venv/bin/activate
uvicorn main:app --host 0.0.0.0
