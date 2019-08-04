```shell
# 删除 serviceWorker.js 以外的所有文件
ls | grep -v serviceWorker.js | xargs rm
npm i normalize.css -S

cd src
cp -r index query
cp -r index ticket
cp -r index order

cd ../public
cp index.html query.html
cp index.html ticket.html
cp index.html order.html

yarn build


```