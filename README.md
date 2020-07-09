
# NodeJS-Study
Study project for learning Node.js  
Simple CRUD contactlist program using react.

## 1. Basic Install for Node.js
1. NodeJS and NPM install :
```bash
sudo apt-get install nodejs
sudo apt-get install npm
```
2. Create package.json :
```bash
npm init --yes
```
3. Install express framework :
```bash
sudo npm install express
```
4. Install connection of MYSQL (using mysql2.js) :
```bash
sudo npm install --save mysql2
```
5. Create App.js and TestRun 'HelloWorld Server'
```bash
node src/App.js
```
6. Install Nodemon (Change script inside package.json) :
```bash
sudo npm install --g nodemon
"dev": "nodemon src/App.js"
```
7. Run with Nodemon :
```bash
npm run dev
```