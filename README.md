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

### Register application at Twitch
1. Register your application at https://dev.twitch.tv/console/apps
2. Add http://localhost:3000/ and http://localhost:8000/auth/twitch/callback/ under OAuth Redirect URLs
3. Record down your client_ID and client_secret. client_secret MUST be kept confidential.

### Clone this project

```bash
  cd ~/projects
  git clone https://github.com/calvinhychu/YourTwitchClips.git
  cd YourTwitchClips
```
### Chaging client_ID and secret_key
1. Change client_id variable in line 9 of YourTwitchClips/react/src/components/Home.js to your client_ID .
2. Change client_id variable in line 21 of YourTwitchClips/node/index.js to your client_ID.
3. Change client_secret variable in line 1 of YourTwitchClips/node/secret_key.js to your client_secret.

### Run React (client-side):

```bash
  cd react
  npm install
  npm start
```
React server should now be hosted at http://localhost:3000/

### Run React (server):

```bash
  cd node
  npm install
  node index.js
```
Node server should now be hosted at http://localhost:8080/


### How it works
YourTwitchClips utilizes Twitch API to get access of Twitch user's follow list and list of top clips from each followed channel. 

YourTwitchClips uses axios to make HTTP call from client-side to server-side, server-side then make HTTP call to Twitch API and return it back to client-side. 

Server-side takes advantage of Express module for routing and API call. 

### Disclaimer
YourTwitchClips is not affiliated with Twitch and is only used for non-profit purposes. All clips are properties of their respective broadcaster or Twitch, YourTwitchClips do not moderate content of any of clips.