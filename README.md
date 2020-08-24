# YourTwitchClips

YourTwitchClips connects your Twitch account and displays compilation of Twitch clips from your follow channels. Go to YourTwitchClips homepage at https://your-twitch-clips.herokuapp.com/.

## Demo 
<img src="./misc/demo.gif"/>

## Usage

1. Click [here](https://your-twitch-clips.herokuapp.com/) to view it in the browser.
2. Connect your Twitch account.
3. After connecting, by default, it will load top clips from past week.
4. Select your desired period.
5. Click on clip to view or channel name to go to channel homepage.

## Getting Started
If you want to run this project locally:

Register an application at https://dev.twitch.tv/console/apps
Add http://localhost:3000/ and http://localhost:8000/auth/twitch/callback/ under OAuth Redirect URLs
Record down your client_ID and client_secret. client_secret MUST be kept confidential.

### Clone this project

```bash
  cd ~/projects
  git clone https://github.com/calvinhychu/YourTwitchClips.git
  cd YourTwitchClips
```
### Chaging client_ID and secret_key
1. Change client_id variable in YourTwitchClips/react/src/components/Home.js to your client_ID .
2. Change client_id variable in line 21 of YourTwitchClips/node/index.js to your client_ID.
3. Change client_secret variable in line 1 of YourTwitchClips/node/secret_key.js to your client_secret.

### To run React (client-side):

```bash
  cd react
  npm install
  npm start
```
React server should be hosted at http://localhost:3000/

### To run React (server):

```bash
  cd node
  npm install
  node index.js
```
Node server should be hosted at http://localhost:8080/


### `npm start`

Runs the app in the development mode.<br />
Open [here](https://your-twitch-clips.herokuapp.com/) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.