# Okta-react app.
## React Application SSO with okta

### Okta Configuration
Install okra CLI on your Mac.
```
brew install --cask oktadeveloper/tap/okta
```
if already have account in the https://developer.okta.com/, login via.
```
okta login --verbose
```
You would be prompted for API (you can find it at **Home** > **Security** > **Tokens**)  
**Note** : Create new one, for the first time.

Okta configurations would be saved in the home directory(at path).
> .okta/okta.yaml 

### Create a integration app in Okta.
```
okta apps create --app-name=<sample app>
```
1. Enter Quickstart when prompted for the app name.

2. Specify the required redirect URI values:
    * Redirect URI: http://localhost:3000/login/callback
    * Post Logout Redirect URI(s) select the default option, http://localhost:3000 

3. Make note of the application configuration printed to the terminal as you use the Client ID and Issuer to configure your SPA.
 
### Adding okta configs in a React App.

Update the okta auth config fiels in src/App.js
```
const oktaAuth = new OktaAuth({
  issuer: 'https://${dev-xxxxx.okta.com}/oauth2/default',
  clientId: 'XXXXXXXXXXXXXX',
```

This project is created using create-react bootstrap.
It can be setup on local setup to test the okta integration.

```
cd okta-react-app
npm install
npm run start
```

You would be redirected to http://localhost:3000


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



