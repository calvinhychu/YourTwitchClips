import React from "react";
import connect from "./assets/image/connect_twitch.jpg";
import Navbar from "./Navbar";
import axios from "axios";
import Clip from "./Clip";
import Footer from "./Footer";
import "./Home.css";

const auth_url =
  "https://id.twitch.tv/oauth2/authorize?client_id=xkyrrtn215pha1wadznenllkxm9f03&redirect_uri=http://localhost:3000&response_type=code&scope=user_read";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { follow_list: [], top_clips: {}, login: false };
  }

  componentDidMount = () => {
    let auth_code = window.location.search.slice(6, 36);
    if (auth_code.length === 30 && this.state.login === false) {
      axios
        .post("/auth/twitch/callback", { auth: auth_code })
        .then((response) => {
          console.log(response.data);
          if (response.data.name !== "Error") {
            this.setState({
              follow_list: response.data,
              login: true,
            });
          }
        });
    }
  };
  render() {
    if (this.state.login === false) {
      return (
        <div className="Home">
          <Navbar />
          <h1 className="header">Welcome to YourTwitchClips!</h1>
          <p className="instruction">
            Connect your Twitch account to get top clips from your follow list
          </p>
          <a href={auth_url}>
            <img
              className="connect"
              src={connect}
              alt="twitch-connect"
              loading="lazy"
            ></img>
          </a>
          <Footer />
        </div>
      );
    } else if (
      this.state.login === true &&
      this.state.follow_list.length === 0
    ) {
      return (
        <div>
          <h3>
            This account is not following any channel! Click
            <a href="http://localhost:3000/"> here</a> to return to home page.
          </h3>
          <Footer />
        </div>
      );
    }
    return <Clip follows={this.state.follow_list} />;
  }
}

export default Home;
