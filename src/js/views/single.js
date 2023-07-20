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
		 <div className="card">               
                <h1 className="p-2" style={{textAlignLast: "center"}}>{store.personaje.name}</h1>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="p-2 rounded mx-auto d-block" style={{ width: "500px", height: "600px" }}/>
                    <div className="card-body">                        
                        <h5 className="card-text p-5" style={{float: "left"}}>Birth year: {store.personaje.birth_year}</h5>
                        <h5 className="card-text p-5" style={{float: "left"}}>Eye color: {store.personaje.eye_color}</h5>
                        <h5 className="card-text p-5" style={{float: "right"}}>Gender: {store.personaje.gender}</h5>
                        <h5 className="card-text p-5" style={{float: "right"}}>Height:  {store.personaje.height}</h5>
                    </div>
            </div>     
			<h1></h1>
			<p> </p>
			<p> </p>
			<p> </p>
			<p></p>			
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
