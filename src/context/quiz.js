import {createContext, useReducer} from "react";
import data from '../data';

const initialState = {
    questions: data,
    currentQuestionIndex: 0
};

const reducer = (state, action) => {
    console.log("reducer", state, action);
    if (action.type === 'NEXT_QUESTION') {
        return {
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1
        }
    }
    return state;
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}