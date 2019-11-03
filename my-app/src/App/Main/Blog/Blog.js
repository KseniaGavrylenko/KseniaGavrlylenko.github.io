import React from 'react';
import './Blog.css'
import './StoryItems/StoryItem.css'
import StoryListItem from './StoryItems/StoryListItem'
import stories from './StoryItems/Stories'

const Blog =() =>{
    return(
    <section className="blog_320">
        <div className="container">
            <p className="blog_description">Life blog</p>
                <div className="row list-items">
                           {                                       
                                stories.map((stories)=>(
                                    <div className="blog_cards" key={stories.id}>
                                    <StoryListItem
                                    image={stories.image}
                                    h3={stories.h3}
                                    description={stories.description}
                                    />
                                     </div> 
                                ))
                           }
                       
                </div>
        </div>
	</section>	
    )
}

export default Blog