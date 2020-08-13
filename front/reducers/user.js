export const initialState = {
  user:{
    id: '', //primary key
    email: '',
    password: '',
    stdnum: 0,
    major:  '',
    nickname: '',
  },

  post:[
    {
      id: 1, //primery key
      star : 0,
      title: '',
      postprofessor: '',
      class: '',
      like: 0,
      disLike: 0,
    },
    {
      id: 1, //primery key
      star : 0,
      title: '',
      postprofessor: '',
      class: '',
      like: 0,
      disLike: 0,
    },
  ],

  fetchinUpdate: false,   //로그인 중 상태확인
  isLoggedIn: false,
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILRUE = 'LOG_IN_FAILRUE'

export const LOG_OUT = 'LOG_OUT'


export const logInAction = (data) => {
  console.log('logInAction');
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
        console.log('login_request')
          return {
              ...state,
              fetchinUpdate: true,
              isLoggedIn: true,
          };
      case LOG_IN_SUCCESS:
        console.log('success');
        console.log(action.data);
        return {
          ...state,
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
          return {
              ...state,
              isLoggedIn: false,
          }
      default:
          return state 
  }
}

export default reducer