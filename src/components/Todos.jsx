import { addTodo, removeTodo } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Todos = () => {
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleAdd = () => {
        dispatch(
            addTodo({
                id: Number,
                title: text,
                status: false
            })
        )
    }

    const handleRemove = () => {
        dispatch(
            removeTodo({
                title: text,
                status: false
            })
        )
    }
    return <div>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAdd}>Add todo</button>
        {todos.map((t) => <div key={t.title}>{t.title}<button onClick={handleRemove}>remove</button></div>)}
    </div>
}