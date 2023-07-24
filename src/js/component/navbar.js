import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<div style={{ padding: "20px" }}>
					<Link to="/">
						<button className="navbar-brand mb-0 h1">
							<img src="https://cdn.freebiesupply.com/logos/thumbs/2x/star-wars-logo.png" style={{ width: "100px", height: "70px" }} />
						</button>
					</Link>
				</div>		
				<div className="ms-auto float-right" style={{ padding: "10px", marginRight: "50px" }}>			
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul class="dropdown-menu">
							{store.favoritos.map((item, id) => (
								<li key={id}>
									<a class="dropdown-item" onClick={() => actions.agregarFavoritos(item)} href="#">{item}</a>
								{/* <button className="btn btn-outline-dark"> */}
									<i className="fa fa-trash float-end"></i>
								{/* </button>                                                            */}
								</li>
							))}
                        </ul>
                    </div>
                </div>						
			</nav>
		</>
	);
};
