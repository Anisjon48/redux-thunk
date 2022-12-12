import { combineReducers } from "redux";
import { todosReducer } from "./todos/todos.reducer";

import { userReducer } from "./users/user-reducer";

export const  rootReducer = combineReducers({
	users: userReducer,
	todos: todosReducer,
})