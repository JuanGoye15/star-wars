import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<>
		<nav className="navbar navbar-light bg-light mb-3">
			<div style={{padding: "10px"}}>
			<Link to="/">
				<button className="navbar-brand mb-0 h1">
					<img src="https://cdn.freebiesupply.com/logos/thumbs/2x/star-wars-logo.png" style={{width: "100px", height: "70px"}}/>
				</button>
			</Link>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
		</>
	);
};
