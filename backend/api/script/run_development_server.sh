#! /usr/bin/env bash

set -euxo pipefail

uvicorn main:app --reload
