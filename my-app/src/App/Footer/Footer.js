import React from 'react';
import './Footer.css'

const Footer =() =>{
    return(
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="ask_me">
                            <p className="form_text">Like what you're reading? Get weekly updates that will help you grow as a designer.</p>
                                <form action="" className="questions">
                                    <input type="text" maxLength="30" id="field_question" className="field_question" placeholder="NAME" required />
                                    <input type="email" className="email_question" required id="email" placeholder="EMAIL"/>
                                    <input type="submit" className="btn_send" id="send_question" value="SUBSCRIBE ➝"/>
                                </form>
                    </div>
                    
                        <div className="footer_social">
                            <a href="https://www.instagram.com/?hl=ru"><img src="images/instagram.svg" alt="instagram" className="icons"/></a>
                            <a href="https://www.facebook.com/"><img src="images/facebook.svg" alt="facebook" className="icons"/></a>
                            <a href="https://www.youtube.com"><img src="images/youtube.svg" alt="youtube" className="icons"/></a>
                            <a href="https://twitter.com/?lang=ru"><img src="images/twitter.svg" alt="twitter" className="icons"/></a>
                        </div>
                                <div className="join_me"> @Copyright 2019
                                </div>
				</div>
			</div>
	    </section>
    )
}

export default Footer