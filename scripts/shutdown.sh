#!/bin/sh
pm2 show global-content-website
if [ $? -eq 0 ]; then
  pm2 delete global-content-website
fi
