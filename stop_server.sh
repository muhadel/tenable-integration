#!/bin/bash
# Stop application
echo "Stop the server application"
pm2 delete -s tenable-integration-server || :