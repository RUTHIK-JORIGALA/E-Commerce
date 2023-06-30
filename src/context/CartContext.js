import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/CartReducer'
const cartContext = createContext();

const initialState = {
    cart : [],
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
}

const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);
    const addToCart = (id, color, amount, product) =>{
        
        dispatch({type:"ADD_TO_CART", payload:{ id, color, amount, product}})
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };

    return(

        <cartContext.Provider value={{...state, addToCart, removeItem}}>
            {children}
        </cartContext.Provider>
    );
}

const useCartContext = () =>{
    return useContext(cartContext);
}

export {CartProvider, useCartContext};