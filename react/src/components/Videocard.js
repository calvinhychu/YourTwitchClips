import React from "react";
import "./Videocard.css";

class Videocard extends React.Component {
  render() {
    let duration = "0:00";
    if (this.props.duration === 60) {
      duration = "1:00";
    } else if (this.props.duration.toString().length === 1) {
      duration = "0:0" + this.props.duration;
    } else {
      duration = "0:" + this.props.duration;
    }
    return (
      <div className="videoCard">
        <div className="container">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <img
              src={this.props.thumbnail}
              alt="thumbnail"
              width="396"
              height="244"
            />
          </a>
          <div className="views">{this.props.views} views</div>
          <div className="duration">{duration}</div>
        </div>
        <div className="info">
          <a
            className="clip_title"
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{this.props.title}</p>
          </a>
          <div className="channel">
            <img
              src={this.props.logo}
              alt="thumbnail"
              width="35"
              height="35"
            ></img>
            <a
              className="channel_name"
              href={this.props.channel_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{this.props.name}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Videocard;
