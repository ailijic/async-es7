#!/usr/bin/env sh

echo "I am build.sh";
babel src.js -o index.js --opyional runtime --experimental;
