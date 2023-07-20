import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";
import { Species } from "../component/species.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => (
	<div className="container">
		<Characters />
		<br/>
		<Planets />
		<br/>
		<Species />
		{/* <Vehicles /> */}
	</div>
);
