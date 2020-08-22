import React from "react";
import Videocard from "./Videocard";
import Navbar from "./Navbar";
import PeriodButton from "./PeriodButton";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Clip.css";

class Clip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clips: [],
      follows: this.props.follows,
      period: "week",
      loading: true,
    };
  }
  componentDidMount = () => {
    if (this.state.follows.length > 0) {
      axios
        .post("/query_top_clips", {
          follows: this.state.follows,
          period: this.state.period,
        })
        .then((response) => {
          console.log(response.data);
          this.setState({
            clips: response.data,
            loading: false,
          });
        });
    }
  };

  QueryClips = (timeframe) => () => {
    this.setState({
      loading: true,
    });
    axios
      .post("/query_top_clips", {
        follows: this.state.follows,
        period: timeframe,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          clips: response.data,
          period: timeframe,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <Navbar />
          <div className="loader">
            <Loader type="ThreeDots" color="#8d42f5" height="100" width="200" />
          </div>
        </div>
      );
    }
    return (
      <div className="block">
        <Navbar />
        <div className="title">
          <h2>Top Clips from past {this.state.period}</h2>
        </div>
        <div className="buttons">
          <PeriodButton action={this.QueryClips} />
        </div>
        <div className="top_clips">
          {this.state.clips.map((clip) => (
            <Videocard
              key={clip.tracking_id}
              url={clip.url}
              thumbnail={clip.thumbnails.small}
              title={clip.title}
              name={clip.broadcaster.display_name}
              views={clip.views}
              channel_url={clip.broadcaster.channel_url}
              logo={clip.broadcaster.logo}
              duration={Math.round(clip.duration)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Clip;
