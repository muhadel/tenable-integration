#!/bin/bash
TENABLE_HOME_PATH="/srv/tenable-integration"

# Start applications
echo "Start the server application"
cd "$TENABLE_HOME_PATH/server/src"
pm2 delete -s tenable-integration-server || :
pm2 start server.js --node-args="-r esm" --env="production" --name=tenable-integration-server
cd -