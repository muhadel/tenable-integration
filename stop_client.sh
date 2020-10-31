#!/bin/bash
# Stop application
echo "Stop Client Application"
pm2 delete -s tenable-integration-client || :