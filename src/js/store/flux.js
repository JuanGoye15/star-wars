const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			especies: [],
			planetas: [],
			personaje: {},
			especie: {},
			planeta: {},
			favoritos: [],

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
			getEspecies: async() => {
				try {
					const response = await fetch("https://swapi.dev/api/species")
					const data = await response.json()
					console.log(data)
					setStore({
						especies: data.results
						
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

			getPlanetaIndividual: async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/" + id)
					const data = await response.json()
					console.log(data)
					setStore({
						planeta: data

						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},	

			getEspecieIndividual: async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/species/" + id)
					const data = await response.json()
					console.log(data)
					setStore({
						especie: data

						
					})					
				} catch(error) {
					console.log(error)
				}
				
			},	

			agregarFavoritos: (item) => {
				const store = getStore()
				if (store.favoritos.includes(item)){
					//si esta incluido lo borra
					const actions = getActions() 
					actions.eliminarFavoritos(item)
				}else {
					setStore({
						favoritos: [...store.favoritos, item]
					})
				}
			},

			eliminarFavoritos: (item) => {
				const store = getStore()
				let nuevoArray = []
				nuevoArray = store.favoritos.filter((element) => element !== item)
				setStore({
					favoritos: nuevoArray
				})
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
