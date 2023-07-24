import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { VehiclesSingle } from "./views/vehiclesSingle.jsx";
import { SpeciesSingle } from "./views/speciesSingle.jsx";
import { PlanetsSingle } from "./views/planetsSingle.jsx";
import { Favorites } from "./component/favorites.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />	
					<Favorites />			
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />	
						<Route path="/vehiclesingle/:theid" element={<VehiclesSingle />} />
						<Route path="/planetsingle/:theid" element={<PlanetsSingle />} />
						<Route path="/speciesingle/:theid" element={<SpeciesSingle />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
