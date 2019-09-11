## Express server for Instaclone

#Server running on localhost:5000

First step is to clone this project from the repo.

In order to run the backend server on your machine, you will want to setup 'npm', 'Node.js' and 'mongoDB'. Npm helps intall package dependencies very easily from your terminal itself rather than having to download the software you want to use. Check out https://www.npmjs.com/get-npm, https://docs.npmjs.com/downloading-and-installing-node-js-and-npm in order to set up Node.js and npm on your local machine. In order to setup mongoDB, follow the instruction in https://docs.mongodb.com/manual/installation/ and you should be able to run mongoDB on your machine.

Once you have them installed, run 'npm install' in your terminal to install the dependencies which are listed in the package.json file for the express-server. This will allow you to now run the back-end server. In order to start the server, make sure you are in the 'express-server' folder. Then, run the command 'mongod' to run the mongoDB server. In another terminal, run 'npm start' to connect with the mongoDB server.

This should setup the backend server on your machine. Since the server is running on localhost:5000, that's the address you will need to type in in order to see any data stored in the server.