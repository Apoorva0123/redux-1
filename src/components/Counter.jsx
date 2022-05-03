import { addCount } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";


export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter);

    return(
    <div>
        <h3>Counter: { counter }</h3>
        <button 
        onClick={() => {
            dispatch(addCount(1))
        }}
        >
          Add 1
        </button>
    </div>
    );
}