The UI for Kommandr.com

Temporary steps for running development environment:

### Install dependencies
```
npm install
```

### Modify GraphQL endpoint IP Address
Open and edit this file `src/react/index.js` line 13 https://github.com/kommandr/kommandr-ui/blob/dev/src/react/index.js#L13
. Update URI with the IP address of your GraphQL Endpoint (usually localhost) or a different IP address if using docker for windows.

###
```
npm start
```
