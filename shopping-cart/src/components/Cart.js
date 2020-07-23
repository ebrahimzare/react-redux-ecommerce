import React from 'react';
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
import Recipe from './Recipe'
import { useDispatch, useSelector } from "react-redux";
const Cart=()=> {

    const items = useSelector(state => state.addedItems);
    const dispatch = useDispatch(); 


    //to remove the item completely
    const handleRemove = (id)=>{
        dispatch(removeItem(id));
    }
    //to add the quantity
    const handleAddQuantity = (id)=>{
        dispatch(addQuantity(id));
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id)=>{
        dispatch(subtractQuantity(id));
    }
   
              
        let addedItems = items.length ?
            (  
                items.map(item=>{
                    return(                       
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img}/>
                            </div>                         
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(item.id)}}>Remove</button>
                            </div>                                
                        </li>                
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>   
                <Recipe />     
            </div>
       )
    
}


export default Cart;