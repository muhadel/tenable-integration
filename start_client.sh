#!/bin/bash
TENABLE_HOME_PATH="/usr/share/nginx/html/tenable-integration"

cd "$TENABLE_HOME_PATH/client"
echo "Start Client Application"
pm2 delete -s tenable-integration-client || :
pm2 start server.js --name=tenable-integration-client
cd -
