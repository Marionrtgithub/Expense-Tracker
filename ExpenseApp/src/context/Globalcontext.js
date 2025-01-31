import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialstate ={
    transactions:[
        { id: 1, text: 'Flower', amount: -20},
        { id: 2, text: 'Salary', amount: +300},
        { id: 3, text: 'Book', amount: -10},
        { id: 4, text: 'Camera', amount: +150},
    ]
}

export const Globalcontext = createContext(initialstate);
export const GlobalProvider =({children}) => {
    const [ state, dispatch] = useReducer(AppReducer, initialstate);

    return(<Globalcontext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </Globalcontext.Provider>)
}
