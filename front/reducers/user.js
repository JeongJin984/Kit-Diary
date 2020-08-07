export const initialState = {
    me : {
        Firstname: '',
        Lastname: '',
        Email:'',
        Password:'',
        professor:'',
    },
	isLoggedIn: false,
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_GIN_FAILURE'

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const LOG_OUT = 'LOG_OUT'


export const logInAction = (data) => {
	return {
		type: 'LOG_IN_REQUEST',
		data
	}
}

export const logOutAction = () => {
	return {
		type: 'LOG_OUT',
		user: null
	}
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                
            }
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: true,
            }
        default:
            return state 
    }
}

export default reducer