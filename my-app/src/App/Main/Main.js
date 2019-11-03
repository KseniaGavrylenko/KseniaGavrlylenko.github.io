import React from 'react';
import MainStory from './MainStory/MainStory'
import Blog from './Blog/Blog'
import AboutMe from './AboutMe/AboutMe'
import VideoBlog from './VideoBlog/VideoBlog'
import '../style.css'



const Main = () =>{
    return(
      <div>   
        <MainStory/>
          <Blog/>
            <VideoBlog/>
              <AboutMe/>
      </div>
    )
}

export default Main