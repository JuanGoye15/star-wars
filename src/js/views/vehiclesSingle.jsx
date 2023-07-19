import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesSingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getVehiculoIndividual(params.theid)
	}, [])
	return (
		<>
			<h1>{store.vehiculo.name}</h1>
		</>
	);
};

VehiclesSingle.propTypes = {
	match: PropTypes.object
};