import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SpeciesSingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getEspecieIndividual(params.theid)
	}, [])
	return (
		<>
			<h1>{store.especie.name}</h1>            
			<p>Classification: {store.especie.classification}</p>
			<p>Averag height: {store.especie.average_height}</p>
			<p>Average lifespan: {store.especie.average_lifespan}</p>
			<p>Language: {store.especie.language}</p>		            
		</>
	);
};

SpeciesSingle.propTypes = {
	match: PropTypes.object
};
