import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsSingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanetaIndividual(params.theid)
	}, [])
	return (
		<>
			<h1>{store.planeta.name}</h1>            
			<p>Climate: {store.planeta.climate}</p>
			<p>Diameter: {store.planeta.diameter}</p>
			<p>Gravity: {store.planeta.gravity}</p>
			<p>Terrain: {store.planeta.terrain}</p>		            
		</>
	);
};

PlanetsSingle.propTypes = {
	match: PropTypes.object
};
