import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPersonajeIndividual(params.theid)
	}, [])
	return (
		<>
			<h1>{store.personaje.name}</h1>
			<p>Birth year: {store.personaje.birth_year}</p>
			<p>Eye color: {store.personaje.eye_color}</p>
			<p>Gender: {store.personaje.gender}</p>
			<p>Height: {store.personaje.height}</p>			
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
