const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
var getclips = require("./functions/get_top_clips");
var views = require("./functions/views_compare");
const secret_key = require("./secret_key.js");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const registered_url = "http://localhost:8080/auth/twitch/callback";
const token_url = "https://id.twitch.tv/oauth2/token";
const accept_header = "application/vnd.twitchtv.v5+json";
// According to Twitch API, client_id can be public but not client_secret
const client_id = "xkyrrtn215pha1wadznenllkxm9f03";
// client_secret is hidden in secret_key.js which is not added to git
const client_secret = secret_key.client_secret;

app.post("/auth/twitch/callback", urlencodedParser, function (req, res) {
  const auth_code = req.body.auth;
  axios({
    // make a POST request to the Twitch authentication API,
    // with client ID, client secret and authorized token
    method: "post",
    url:
      token_url +
      "?client_id=" +
      client_id +
      "&client_secret=" +
      client_secret +
      "&code=" +
      auth_code +
      "&grant_type=authorization_code" +
      "&redirect_uri=" +
      registered_url,
  })
    .then((response) => {
      // Extract the access token from the response body
      const accessToken = response.data.access_token;
      console.log(accessToken);
      // Make a GET request to Twitch API with access token
      // to get user's channel ID
      axios({
        method: "get",
        url: "https://api.twitch.tv/kraken/user",
        headers: {
          Accept: accept_header,
          "Client-ID": client_id,
          Authorization: "OAuth " + accessToken,
        },
      }).then((response) => {
        // Extract user's channel ID from response body
        const user_id = response.data._id;
        console.log(user_id);
        axios({
          // make a GET request to Twitch API with user ID to get
          // followers list
          method: "get",
          url:
            "https://api.twitch.tv/kraken/users/" +
            user_id +
            "/follows/channels?limit=100",
          headers: {
            Accept: accept_header,
            "Client-ID": client_id,
          },
        }).then((response) => {
          // Extract user's follow list
          const follows_list = response.data.follows;
          // Initialize temporary array and push channel names from follow list
          const follows = [];
          for (let i = 0; i < follows_list.length; i++) {
            follows.push(follows_list[i].channel.name);
          }
          // Send array of channel names to front-end
          res.send(follows);
        });
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/query_top_clips", urlencodedParser, async (req, res) => {
  const channels = req.body.follows;
  const period = req.body.period;
  // top_clips are compilation of clips from defined period from follow list
  top_clips = await getclips.get_top_clips(channels, period);
  // sorted clips are top clips sorted by view from defined period from follow list (max 300 clips)
  sorted_clips = await top_clips.sort(views.compare).slice(0, 300);
  // send sorted clips back to front-end
  res.send(sorted_clips);
});

app.use(express.static(__dirname + "/public"));
app.listen(8080);
