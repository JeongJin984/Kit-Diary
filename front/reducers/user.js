export const initialState = {
  user:{
    id: '', //primary key
    email: '',
    password: '',
    stdnum: 0,
    major:  '',
    nickname: '',
  },


  fetchinUpdate: false,   //로그인 중 상태확인
  isLoggedIn: false,
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILRUE = 'LOG_IN_FAILRUE'

export const LOG_OUT = 'LOG_OUT'


export const logInAction = (data) => {
  //console.log('logInAction');
  return {
    type: 'LOG_IN_REQUEST',
    data: data
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
        //console.log('login_request')
          return {
              ...state,
              fetchinUpdate: true,
              isLoggedIn: false,
          };
      case LOG_IN_SUCCESS:
        sessionStorage.setItem('user', JSON.stringify(action.data));
        sessionStorage.setItem('islogined', true);
        //console.log(JSON.parse(sessionStorage.user));
        return { 
          ...state,
          user :{
            email : action.data.email,
            password: action.data.password,
          },
          fetchinUpdate: false,
          isLoggedIn: true,
        }
      case LOG_IN_FAILRUE:
          console.log('fail');
          return {
              ...state,
              fetchinUpdate: false,
              isLoggedIn: false,
          }

      case LOG_OUT:
        sessionStorage.setItem('islogined', false);
        sessionStorage.removeItem('user');
        return {
            ...state,
            isLoggedIn: false,
        }
      default:
          return state ;
  }
}

export default reducer