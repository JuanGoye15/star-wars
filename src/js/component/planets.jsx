import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getPlanetas()
    }, [])

    return(
        <>
            <h1>Planets</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planetas.map((item, id) => (
                        <div className="card" key={id} style={{width: "18rem", flex: "none", margin: "10px"}}> 
                        {id === 0 ? <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top"/> : 
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} className="card-img-top"/>}
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Diameter: {item.diameter}</p>
                                <p className="card-text">Climate: {item.climate}</p>
                                <p className="card-text">Gravity: {item.gravity}</p>
                            </div>
                            <div className="container" style={{padding: "10px"}}>
                                <Link to="/demo">					            
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