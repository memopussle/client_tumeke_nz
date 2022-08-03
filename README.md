# Dependencies needed for this project

```
npm install @material-ui/core @material-ui/icons @material-ui/lab @react-google-maps/api axios google-map-react

```

- P/s: those packages are not supported by React 18. Please downgrade React to version 16.

**Option 1:Search for the react and react-dom packages under dependencies (or devDependencies) and replace their versions with 16.13.0. Then run npm install or yarn or whatever package manager you're using. This should be enough to downgrade to React 16.**

**Option 2:`npm install --save react@16.13.0 react-dom@16.13.0` (command line)**

## Create API keys using Google Cloud Services

- Go to https://console.cloud.google.com/projectcreate

- Go to project just created on Google clould

- Go to APIs and services ( on left column) -> Enabled APIs and services

- Go to credentials (on left column) -> create credentials ( create API key)

## Fetch data

- To keep it clean, create a folder named "api" to store api data