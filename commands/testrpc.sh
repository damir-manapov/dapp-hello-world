#!/bin/bash
# docker run -d -p 8545:8545 --name testrpc ethereumjs/testrpc:latest -u 0 -u 1
#docker run -d -p 8545:8545 --name testrpc ethereumjs/testrpc:latest -u 0 -u 1 --unlock "0x2c6d488e802a956fe8ffd0dfa7b9cdb8ba42c89b602f2f7f069c73c75484dd41" --account="0x2c6d488e802a956fe8ffd0dfa7b9cdb8ba42c89b602f2f7f069c73c75484dd41, 90000000000000000000"
#docker run -d -p 8545:8545 --name testrpc ethereumjs/testrpc:latest --account="0x2c6d488e802a956fe8ffd0dfa7b9cdb8ba42c89b602f2f7f069c73c75484dd41, 90000000000000000000" -u 0 -u 1
docker run --rm -d -p 8545:8545 --name testrpc ethereumjs/testrpc:latest --account="0x2c6d488e802a956fe8ffd0dfa7b9cdb8ba42c89b602f2f7f069c73c75484dd41, 90000000000000000000"
