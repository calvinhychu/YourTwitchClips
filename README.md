# YourTwitchClips

YourTwitchClips connects your Twitch account and displays compilation of Twitch clips from your follow channels. Go to YourTwitchClips homepage at [https://your-twitch-clips.herokuapp.com/](https://your-twitch-clips.herokuapp.com/).

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

Register an application at [https://dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps)
Add http://localhost:3000/ and http://localhost:8000/auth/twitch/callback/ under OAuth Redirect URLs
Record down your client_ID and client_secret. client_secret MUST be kept confidential.

- __Clone this project__

```bash
  cd ~/projects
  git clone https://github.com/calvinhychu/YourTwitchClips.git
  cd YourTwitchClips
```

To run React (client-side):

```bash
  cd react
  npm install
```
Change client_id in Home.js to your client_ID
`npm start`
React server should be hosted http://localhost:3000/

To run React (server):

```bash
  cd /node
  npm install
```
Change client_id in index.js to your client_ID.
Create secret_key.js under YourTwitchClips/node/ and save your secret_key there.
`node index.js`
Node server should be hosted http://localhost:3000/


### `npm start`

Runs the app in the development mode.<br />
Open [here](https://your-twitch-clips.herokuapp.com/) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.