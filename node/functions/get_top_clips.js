const axios = require("axios");
const accept_header = "application/vnd.twitchtv.v5+json";
const client_id = "xkyrrtn215pha1wadznenllkxm9f03";

module.exports = {
  get_top_clips: async function (channels, period) {
    // Initialize temporary array
    let clip = [];
    for (let i = 0; i < channels.length; i++) {
      // Loop for each channel and make GET request for top 50 clips
      urll =
        "https://api.twitch.tv/kraken/clips/top?channel=" +
        channels[i] +
        "&period=" +
        period +
        "&limit=50";
      await axios({
        method: "get",
        url: urll,
        headers: {
          Accept: accept_header,
          "Client-ID": client_id,
        },
      })
        .then((response) => {
          // Concatenate clips from all channels
          clip = clip.concat(response.data.clips);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // Return array of top clips from each channel in channels
    return clip;
  },
};
