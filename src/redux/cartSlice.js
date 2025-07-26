import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action) => {
            const itemExist = state.cart.find((item) => item.id === action.payload.id)
            if (itemExist) {
               itemExist.quantity++
            } else {
                
                state.cart.push({...action.payload, quantity:1})
           }

        },
        incrementQuantity: (state, action) => {
            const itemExist = state.cart.find((item) => item.id === action.payload.id)
            
             if (itemExist) {
               itemExist.quantity++;
             }
        },
        decrementQuantity: (state, action) => {
            const itemExist = state.cart.find((item) => item.id === action.payload.id)
            if (itemExist) {
                if (itemExist.quantity  === 1) {
                      return
                  }
                itemExist.quantity--;
              }
        },
        removeItem: (state, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload.id)
         state.cart.splice(index,1)
},
        clearCart: (state) => {
            state.cart = []
        }
    }

})




export const { clearCart, addItem, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer