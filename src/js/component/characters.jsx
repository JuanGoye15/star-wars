import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getPersonajes()
    }, [])

    return(
        <>
            <h1>Characters</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item, id) => (
                        <div className="card" key={id} style={{width: "18rem", flex: "none", margin: "10px"}}> 
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Gender: {item.gender}</p>
                                <p className="card-text">Eyes color: {item.eye_color}</p>
                                <p className="card-text">Height: {item.height}</p>
                            </div>
                            <div className="container" style={{padding: "10px"}}>
                                <Link to={"/single/" + (id + 1)}>					            
                                    <button className="btn btn-outline-primary" style={{float: "left"}}>Learn more! </button>
                                </Link>
                                <Link to="---">
                                    <button className="btn btn-outline-warning" style={{float: "right", width: "30px", padding: "5px"}}>❤</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}