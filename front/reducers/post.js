import Router from "next/router";

export const initialState = {
  posts:[				
    {
      id: 1, //primery key
      userid: 0, //foreigin key

      star : 5,
      date: 0,

      classification : '전공',
      professor: 'ggg',
      class: '기초프로그래밍',
      title: '좋아용',
      contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',

      like: 3,
      dislike: 1,
    },
  ],
  fetchinUpdate: false,   //리스트 업데이트 중 상태확인
}

export const POST_SAVE_REQUEST = 'POST_SAVE_REQUEST';
export const POST_SAVE_SUCCESS = 'POST_SAVE_SUCCESS';
export const POST_SAVE_FAILRUE = 'POST_SAVE_FAILRUE';


export const POST_REMOVE_REQUEST = 'POST_REMOVE_REQUEST';
export const POST_REMOVE_SUCCESS = 'POST_REMOVE_SUCCESS';
export const POST_REMOVE_FAILRUE = 'POST_REMOVE_FAILRUE';


export const POST_SEARCH_REQUEST = 'POST_SEARCH_REQUEST';
export const POST_SEARCH_SUCCESS = 'POST_SEARCH_SUCCESS';
export const POST_SEARCH_FAILRUE = 'POST_SEARCH_FAILRUE';



export const POST_LIST_REQUEST = 'POST_LIST_REQUEST';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LIST_FAILRUE = 'POST_LIST_FAILRUE';

export const POST_REVISION_REQUEST = 'POST_REVISION_REQUEST';
export const POST_REVISION_SUCCESS = 'POST_REVISION_SUCCESS';
export const POST_REVISION_FAILRUE = 'POST_REVISION_FAILRUE';


export const post_save = (data) => {
  console.log('post_save');
  return{
    type: POST_SAVE_REQUEST,
    data: data
  }
}

export const post_remove = (id) => {
  console.log('post_remove');
  return{
    type: POST_REMOVE_REQUEST,
    data: id
  }
}
export const post_search = (data) => {
  console.log('post_read');
  return{
    type: POST_SEARCH_REQUEST,
    data: data
  }
}

export const post_list = () => {
  console.log('post_list');
  return{
    type: POST_LIST_REQUEST
  }
}

export const post_revision = (data) => {
  console.log('post_revision');
  return{
    type: POST_REVISION_REQUEST,
    data:data
  }
}

const reducer = (state=initialState, action) =>{
  switch(action.type){    
    case POST_SAVE_REQUEST:
      console.log('POST_SAVE_REQUEST : ' + action.data);
      return {
        ...state,
        fetchinUpdate:true
      }
    case POST_SAVE_SUCCESS:
      alert('save success')
      return {
       state,
       fetchinUpdate:false
      }

    case POST_SAVE_FAILRUE:
      alert('save fail')
      Router.push("/ReviewWrite")
      return {
        state,
        fetchinUpdate:false
      }


    case POST_REMOVE_REQUEST:
        return { 
          state,
          fetchinUpdate:true
        }
    case POST_REMOVE_SUCCESS:
      alert('delete success')
      return {
        state,
        fetchinUpdate:false
      }
    case POST_REMOVE_FAILRUE:
      alert('delete fail')
      return {
        state,
        fetchinUpdate:false
      }


    case POST_SEARCH_REQUEST: 
      return {
        state,
        fetchinUpdate:true
      }
    case POST_SEARCH_SUCCESS: 
      console.log(action.data);
      return {
        ...state,
        posts:action.data,
        fetchinUpdate:false
      }
    case POST_SEARCH_FAILRUE: 
      alert('posts_loading_fail')  
      return {
        state,
        fetchinUpdate:false
      }


    case POST_LIST_REQUEST:
      return {
        ...state,
        fetchinUpdate:true
      }

    case POST_LIST_SUCCESS:
      console.log('list_success_data:'+ action.data);
      return {
        ...state,
        posts:action.data,
        fetchinUpdate:false
      }

    case POST_LIST_FAILRUE:
      alert('posts_loading_fail')  
      return{
          ...state,
          fetchinUpdata:false;
        }

    case POST_REVISION_REQUEST: 
      return {
        state,
        fetchinUpdate:true
      }
    case POST_REVISION_SUCCESS: 
      console.log('success_ revision')
      return {
        ...state,
        fetchinUpdate:false
      }
    case POST_REVISION_FAILRUE: 
      alert('posts_loading_fail')  
      return {
        state,
        fetchinUpdate:false
      }

    default:
      return state ;
  }
}
                      

export default reducer