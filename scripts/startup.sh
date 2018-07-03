#!/bin/sh
# 切换到 bash 执行文件所在的目录
cd /opt/tars/apps/100015463/current

start() {
  npm run build && pm2 start server.js --env production --name global-content-website -i 4 -o /opt/logs/100015463/access.log -e /opt/logs/100015463/error.log --merge-logs --log-date-format "YYYY-MM-DD HH:mm:ss "
}

stop() {
	pm2 delete global-content-website
}

restart() {
	stop
	start
}

show() {
	pm2 show global-content-website
}

show
if [ $? -ne 0 ]; then 
  start
else
  restart
fi

exit 0
