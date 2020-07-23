import React, { useEffect  , useRef} from 'react'

import { addShipping , subShipping} from '../actions/cartActions'
import { useDispatch, useSelector } from "react-redux";


const Recipe =(props)=>{
const dispatch = useDispatch();  

    useEffect(() => {
        if(ckeckBoxRef.current.checked)
            dispatch(subShipping)
      });
  
  

const ckeckBoxRef = useRef(null);  
const handleChecked = (e)=>{
    if(ckeckBoxRef.current.checked){
        dispatch(addShipping());
    }
    else{
        dispatch(subShipping());
    }
};
  

const total = useSelector(state => state.total);
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref={ckeckBoxRef} onChange= {handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    
}

export default Recipe; 






