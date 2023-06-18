
import { useDispatch } from 'react-redux'
import {updateAsync} from "./../../redux/features/cartSlice"

export default function QuantityBox({ count ,itemId}) {

    const dispatch = useDispatch()
     return (
     
     <div className="quantity__count">
           <i onClick={() => dispatch(updateAsync({itemId,count: count == 1 ? count : count - 1}))} className="fa fa-minus" aria-hidden="true"></i>
           <h2>{count}</h2>
           <i onClick={() => dispatch(updateAsync({itemId,count: count == 5 ? count : count + 1}))} className="fa fa-plus" aria-hidden="true"></i>
    </div>);
   }