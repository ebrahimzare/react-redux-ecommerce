import Item1 from '../images/item1.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from '../actions/types'

const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item1},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item1},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item1},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item1},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item1}
    ],
    addedItems:[],
    total: 0

}
 
const cartReducer =(state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem=state.items.find(item=>item.id===action.id)

            let excistedItem=state.addedItems.find(item=>item.id===action.id)

            if(excistedItem){
                addedItem.quantity+=1
                return{
                    ...state,
                    total:state.total+addedItem.price
                }
            }else{
                addedItem.quantity=1
                
                return{
                    ...state,
                    addedItems:[...state.addedItems, addedItem],
                    total:state.total + addedItem.price
                }
            }

        case  REMOVE_ITEM:
            let itemToRemove=state.addedItems.find(item=>item.id===action.id)
            let newItems=state.addedItems.filter(item=>item.id !==action.id)

             //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log(itemToRemove)

            return{
                ...state,
                addedItems:newItems,
                total: newTotal
            }
        case ADD_QUANTITY:
            let addedQuantityItem = state.items.find(item=> item.id === action.id)
            addedQuantityItem.quantity += 1 
            
            return{
                ...state,
                total: state.total + addedQuantityItem.price
            }
        case SUB_QUANTITY:
            let removedItem = state.items.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(removedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - removedItem.price
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                removedItem.quantity -= 1
                let newTotal = state.total - removedItem.price
                return{
                    ...state,
                    total: newTotal
                }
            } 
            
        case ADD_SHIPPING:
            return{
                ...state,
                total: state.total + 6
                      }  
        case SUB_SHIPPING:
        return{
            ...state,
            total: state.total - 6
                    }             
        default:
            return state
    }
}
export default cartReducer;