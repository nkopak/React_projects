import {SET_PRODUCTS} from "../actionTypes";

const initialState = {
    products: []
}

export default (state= initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:{
            console.log(action)
            return {...state, products: action.payload}
        }
        default: {
            return state
        }
    }
}
