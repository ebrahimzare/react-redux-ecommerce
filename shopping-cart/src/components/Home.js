import React from 'react'
import { addToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from "react-redux";

const Home=()=>{
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();  
    const handleClick = (id)=>{
        dispatch(addToCart(id));
    }
   
    let itemList = items.map(item=>{
        return(
            <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" 
                        onClick={()=>{handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
        )
    })

    return(
        <div className="container">
            <h3 className="center">Our items</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
    )
   
}
export default Home;