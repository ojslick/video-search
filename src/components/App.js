import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const KEY = "AIzaSyDXa4FE1HDIgPSWD5DGcBW9kbuQtzih2_M";
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term
      }
    });
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
