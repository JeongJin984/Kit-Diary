import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper"


import user from './user'
import post from './post'

const rootReducer = (state, action) =>{
    switch(action.type){
        case HYDRATE:
            return action.payload
        default:{
            const Reducer = combineReducers({
                user,
                post
            });
        return Reducer(state,action)
        }
    }
}

export default rootReducer