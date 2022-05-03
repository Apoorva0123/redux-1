import { ADD_COUNT, REMOVE_TODO } from "./action";
import { ADD_TODO } from "./action";

export const counterReducer = (store, {type, payload}) => {
    switch(type){
        case ADD_COUNT:
            return {...store, counter: store.counter + payload}
        case ADD_TODO:
            return {...store, todos: [...store.todos, payload] }
        case REMOVE_TODO:
            return {...store, todos: store.todos.filter((el) => el.title !== payload)}
        default:
            return store
    }
}
