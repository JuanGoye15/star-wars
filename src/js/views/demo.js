import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	// const { store, actions } = useContext(Context);

	// useEffect(() => {
    //     actions.getPersonajes()
    // }, [])

	// return (
	// 	<div className="container">
	// 		 <div className="d-flex flex-row overflow-scroll">
    //                 {store.personajes.map((item, id) => (
    //                     <div className="" key={id} style={{width: "18rem", flex: "none", margin: "10px"}}> 
    //                         <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="img-top"/>
    //                         <div className="body">
    //                             <h5 className="title">{item.name[id]}</h5>
    //                             <p className="text">Gender: {item.gender}</p>
    //                             <p className="text">Eyes color: {item.eye_color}</p>
    //                             <p className="text">Height: {item.height}</p>
    //                         </div>                            
    //                     </div>
    //                 ))}
    //             </div>
	// 	</div>
	// );
};
