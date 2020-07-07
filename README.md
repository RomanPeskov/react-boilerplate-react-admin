## Welcome to the awesome App!

### Description
This app is an example of integration react-boilerplate with react-admin. To achieve this result, the following was done:
1. Implemented Admin page with using components from react-admin library.
2. Created AuthProvider which includes login, logout, checkError, checkAuth, getPermissions functionality.
3. Connected pouchDB for storing user data.
4. Created DataProvider which includes getOne and getList methods for working with pouchDB.
5. Implemented user profile editing.

### Quick start
1.  Make sure you have Node.js v8.15.1 and npm v5 or above installed.
2.  Run `npm install -g pouchdb-server` to install pouchdb-server on your local machine.
3.  Run `pouchdb-server --port 5984` to launch pouchdb-server. You can check the database connection by the following link: `http://127.0.0.1:5984/_utils/`.
4.  Run `npm i` in order to install app dependencies.
5.  Run `npm start` to start app at `http://localhost:3000`.
6.  You can run `npm test` to execute tests.
