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
			<div className="card">
				<h1 className="p-2" style={{ textAlignLast: "center" }}>{store.especie.name}</h1>
				<img src={`https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg`} className="p-2 rounded mx-auto d-block" style={{ width: "500px", height: "600px" }}/>
				<div className="card-body">
					<h5 className="card-text p-5" style={{ float: "left" }}>Classification: {store.especie.classification}</h5>
					<h5 className="card-text p-5" style={{ float: "left" }}>Averag height: {store.especie.average_height}</h5>
					<h5 className="card-text p-5" style={{ float: "right" }}>Average lifespan: {store.especie.average_lifespan}</h5>
					<h5 className="card-text p-5" style={{ float: "right" }}>Language: {store.especie.language}</h5>
				</div>
			</div>
		</>
	);
};

SpeciesSingle.propTypes = {
	match: PropTypes.object
};
