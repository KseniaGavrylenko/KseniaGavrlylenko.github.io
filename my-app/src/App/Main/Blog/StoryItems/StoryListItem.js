import React from 'react';
import './StoryItem.css'


const StoryListItem = (props) =>{
    return(
            <div className="blog_item">
                <img src="{props.image}" alt="/" className="blog_card_img"/> 
                    <h3>{props.h3}</h3>
                        <p className="blog_text">
                        {props.description}
                        </p>
                <a href="all_travels.html" className="storypage_btn">Full story <span>➝</span></a>
            </div>
    )
}


export default StoryListItem