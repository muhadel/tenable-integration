#!/bin/bash
TENABLE_HOME_PATH_HOME_PATH="/var/www/html/tenable-integration"

cd "$TENABLE_HOME_PATH/client"
echo "Start Client Application"
pm2 delete -s tenable-integration-client || :
pm2 start express-server.js --name=tenable-integration-client
cd -
