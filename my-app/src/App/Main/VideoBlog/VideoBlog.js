import React from 'react';
import YouTube from 'react-youtube';
import './VideoBlog.css'

class VideoBlog extends React.Component {
    render() {
      const opts = {
        height: '603',
        width: '100%',
        playerVars: { 
          autoplay: 1
        }
      };
   
      return (
        <YouTube
          videoId="YtZZ-hxz9TI"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
}

export default VideoBlog