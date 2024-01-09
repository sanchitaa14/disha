import React, { createContext, useContext, useReducer } from 'react'
//children can be any multiple components
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state] //putting add and delete so if the user changes his choice all the stuff doesnt get added
            arr.find((info, index) => {
                if (info.id === action.id) {
                    console.log(info.qty, parseInt(action.qty), action.price + info.price)
                    arr[index] = { ...info, qty: parseInt(action.qty) + info.qty, price: action.price + info.price }
                }
                return arr
            })
            return arr
        default:
            console.log("Error in Reducer");
    }
};
export const CartProvider = ({children}) =>{ //empty array as in the start cart is empty
    const[state,dispatch] = useReducer(reducer, [])//reducer reduces basically
    return(
       <CartDispatchContext.Provider value = {dispatch}>
           <CartDispatchContext.Provider value = {state}>
            {children}
           </CartDispatchContext.Provider>
       </CartDispatchContext.Provider>
       
       )
}
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);