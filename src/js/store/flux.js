const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [],
			contacts: [
				{
					full_name: "George Bradley",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				}
			]
			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: (name, address, phone, email) => {
				//const store = getStore();
				//const temp = store.agenda.concat([element]);
				//setStore({ agenda: temp });
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "george_agenda",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => console.log(response.json()))
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/george_agenda")
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ agenda: data });
							});
					});

				console.log("created");
			},

			editContact: (name, address, phone, email, id, history) => {
				let store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "george_agenda",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => console.log(response.json()))
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/george_agenda")
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ agenda: data });
							});
					})
					.then(() => history.push("/"));

				//(Arrow) Functions that update the Store
				// Remember to use the scope: scope.state.store & scope.setState()
			},

			deleteContact: id => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "delete",
					headers: { "Content-Type": "aplication/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/george_agenda")
						.then(response => response.json())
						.then(data => {
							setStore({ agenda: data });
						});
				});
			}
		}
	};
};

export default getState;
