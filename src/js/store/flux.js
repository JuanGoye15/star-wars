const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			vehiculos: [],
			planetas: [],
			personaje: {},
			vehiculo: {},

		}, 
		actions: {
			getPersonajes: async() => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({
						personajes: data.results
						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},	
			getPlanetas: async() => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data)
					setStore({
						planetas: data.results
						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},		
			getVehiculos: async() => {
				try {
					const response = await fetch("https://swapi.dev/api/vehicles")
					const data = await response.json()
					console.log(data)
					setStore({
						vehiculos: data.results
						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},		
			
			getPersonajeIndividual: async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({
						personaje: data

						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},	

			getVehiculoIndividual: async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/vehicles/" + id)
					const data = await response.json()
					console.log(data)
					setStore({
						vehiculo: data

						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},	
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
