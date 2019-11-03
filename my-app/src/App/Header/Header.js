import React from 'react';
import './Header.css';
import '../media.css'

const Header = () => {
    return(
        <header>
		<div className="container">
			<div className="row">
				<div className="col-md-2">
					<div className="burger_menu">
						<input id="menu__toggle" type="checkbox" />
						<label className="menu__btn" htmlFor="menu__toggle">
							<span></span>
						</label>
						<ul className="menu__box">
							<li><a className="menu__item" href="all_travels.html">All travels</a></li>
							<li><a className="menu__item" href="videos.html">Videos</a></li>
							<li><a className="menu__item" href="contacts.html">Contacts</a></li>
						</ul>
					</div>
				</div>
		<div className="col-md-10">
			<div className="header_text">Story</div>
				<a href="index.html" className="link_name">
					<div className="name">Marcy.. </div>
				</a>
			</div>
		</div>
		</div>
		</header>
    )
}

export default Header
