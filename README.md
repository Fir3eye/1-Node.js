
# Setup Locally 🎯
## Clone the Code 
```
git clone https://github.com/Fir3eye/1-Node.js.git
```

## Install package manager
```
apt install npm 
```
## Install Package and Dependency 
npm install

## Run the app
node index.js

## Access the app *use your server IP : 3000*
```
your_server_ip:3000
```
---
## Application Run in Background 
**Install pm2**
```
npm install -g pm2
```
**Run in Background**
```
pm2 start index.js
```
**Stop the app**
```
pm2 stop index.js
```
**See the logs**
```
pm2 logs index.js
```
**Delete the app from Background**
```
pm2 delete index.js
```
---

