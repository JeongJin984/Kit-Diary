export const initialState = {
    me : {
        Firstname: '',
        Lastname: '',
        Email:'',
        Password:'',
        professor:'',
    },
    fetchinUpdate: false,   //로그인 중 상태확인
	isLoggedIn: false,
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_GIN_FAILURE'

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
                fetchinUpdate: true,
                isLoggedIn: false,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                fetchinUpdate: false,
                isLoggedIn: true,
                me: action.result,
            }
        case LOG_IN_FAILRUE:
            return {
                ...state,
                fetchinUpdate: false,
                isLoggedIn: false,
            }


        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            return state 
    }
}

export default reducer