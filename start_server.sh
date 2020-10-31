#!/bin/bash
TENABLE_HOME_PATH="/var/www/html/tenable-integration"

# Start applications
echo "Start the server application"
cd "$TENABLE_HOME_PATH/server"
pm2 delete -s tenable-integration-server || :
pm2 start serc/server.js --name=tenable-integration-server
cd -
