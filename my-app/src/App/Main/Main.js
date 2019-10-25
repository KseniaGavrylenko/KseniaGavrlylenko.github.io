import React from 'react';
import MainStory from './MainStory/MainStory'
import Blog from './Blog/Blog'
import '../style.css'


const Main = () =>{
    return(
        <div>   
        <MainStory/>
          <Blog/>
            <section className="video_blog">
            </section>
              <section className="about_me">
              </section>
        </div>
    )
}

export default Main