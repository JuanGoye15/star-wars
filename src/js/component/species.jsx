import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Species = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getEspecies()
    }, [])
    console.log(store.especies.url)
    return(
        <>
            <h1>Species</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.especies.map((item, id) => (
                        <div className="card" key={id} style={{width: "18rem", flex: "none", margin: "10px"}}> 
                            <img src={"https://starwars-visualguide.com/assets/img/species/" + (id + 1) + ".jpg"} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Classification: {item.classification}</p>
                                <p className="card-text">Designation: {item.designation}</p>
                                <p className="card-text">Average lifespan: {item.average_lifespan}</p>
                            </div>
                            <div className="container" style={{padding: "10px"}}>
                                <Link to={"/speciesingle/" + (id + 1)}>					            
                                    <button className="btn btn-outline-primary" style={{float: "left"}}>Learn more! </button>
                                </Link>                                
                                    <button className="btn btn-outline-warning" onClick={() => actions.agregarFavoritos(item.name)} style={{float: "right", width: "30px", padding: "5px"}}>❤</button>                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}