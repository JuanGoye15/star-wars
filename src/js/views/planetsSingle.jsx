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
            <div className="card">               
                <h1 className="p-2" style={{textAlignLast: "center"}}>{store.planeta.name}</h1>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="p-2 rounded mx-auto d-block" style={{ width: "500px", height: "600px" }}/>
                    <div className="card-body">                        
                        <h5 className="card-text p-5" style={{float: "left"}}>Climate: {store.planeta.climate}</h5>
                        <h5 className="card-text p-5" style={{float: "left"}}>Diameter: {store.planeta.diameter}</h5>
                        <h5 className="card-text p-5" style={{float: "right"}}>Gravity: {store.planeta.gravity}</h5>
                        <h5 className="card-text p-5" style={{float: "right"}}>Terrain: {store.planeta.terrain}</h5>
                    </div>
            </div>            
        </>
    );
};

PlanetsSingle.propTypes = {
    match: PropTypes.object
};
