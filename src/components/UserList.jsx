import { useSelector } from "react-redux"

export const UserList = () => {
	const users = useSelector(state => state.users)
	return (
		<div>
			Users: {users.length}
		</div>
	)
}