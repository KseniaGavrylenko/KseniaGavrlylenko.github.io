import React from 'react';
import './MainStory.css'
import imageBig from './volcano.png'
import imageLittle from './norv2.jpg'

const MainStory = () => {
    return(
        <section className="main_story">
	<div className="container">
			<div className="row">
			<div className="col-md-5">
					<div className="last_travel_story">
						<p className="description">Travel</p>
						<h2> Nullam id dolor id nibh ultricies vehicula ut id elit. </h2>
						<p className="last_travel_story__text">
						Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. 
						<br/><br/><br/>
						Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.	
						</p>
						<a href="all_travels.html" className="storypage_btn">Full story <span>➝</span></a>
			</div>
			</div>
			<div className="col-md-7">
				<img src={imageBig} alt="" className="last_travel_story__img"/>	
				<img src={imageLittle} alt="" className="last_travel_story__mini-img"/>
		</div>
	</div>
	</div>
	</section>
    )
}

export default MainStory