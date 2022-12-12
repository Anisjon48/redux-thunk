export const ADD_USERS = "ADD_USERS";

export const addUsers = (users) => ({
	type: ADD_USERS,
	payload: users,
})

export const loadUsers = () => (dispatch, _, client) => {
	console.log(client)
	client.get(`https://jsonplaceholder.typicode.com/users`)
		.then(data => dispatch(addUsers(data)))
		.catch(e => console.error(e))
}