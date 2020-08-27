

export const initialState = {
  comments:[				
    {
      id:0,
      userid:0,
      postid:0,
      
      contents:'좋은 리뷰입니다.',
      like:2,
      dislike:1,
    },
  ],
  fetchinUpdate: false,   //리스트 업데이트 중 상태확인
}


export const CO_SAVE_REQUEST = 'CO_SAVE_REQUEST';
export const CO_SAVE_SUCCESS = 'CO_SAVE_SUCCESS';
export const CO_SAVE_FAILRUE = 'CO_SAVE_FAILRUE';

export const CO_REMOVE_REQUEST = 'COT_REMOVE_REQUEST';
export const CO_REMOVE_SUCCESS = 'CO_REMOVE_SUCCESS';
export const CO_REMOVE_FAILRUE = 'CO_REMOVE_FAILRUE';

export const CO_LIST_REQUEST = 'CO_LIST_REQUEST';
export const CO_LIST_SUCCESS = 'CO_LIST_SUCCESS';
export const CO_LIST_FAILRUE = 'CO_LIST_FAILRUE';

export const CO_REVISION_REQUEST = 'CO_REVISION_REQUEST';
export const CO_REVISION_SUCCESS = 'CO_REVISION_SUCCESS';
export const CO_REVISION_FAILRUE = 'CO_REVISION_FAILRUE';



export const co_saveAction = (data) => {
  console.log('post_save');
  return{
    type: CO_SAVE_REQUEST,
    data: data
  }
}

export const co_removeAction = (id) => {
  console.log('post_remove');
  return{
    type: CO_REMOVE_REQUEST,
    data: id
  }
}
export const co_searchAction = (data) => {
  console.log('post_read');
  return{
    type: CO_SEARCH_REQUEST,
    data: data
  }
}

export const co_listAction = (data) => {
  console.log('co_list');
  console.log(data);
  return{
    type: CO_LIST_REQUEST,
    data: data,
  }
}

export const co_revisionAction = (data) => {
  console.log('post_revision');
  return{
    type: POST_REVISION_REQUEST,
    data:data
  }
}


const reducer = (state=initialState, action) =>{
  switch(action.type){    
    case CO_SAVE_REQUEST:
      console.log('POST_SAVE_REQUEST : ' + action.data);
      return {
        ...state,
        fetchinUpdate:true
      }
    case CO_SAVE_SUCCESS:
      alert('save success')
      return {
       state,
       fetchinUpdate:false
      }

    case CO_SAVE_FAILRUE:
      alert('save fail')
      Router.push("/ReviewWrite")
      return {
        state,
        fetchinUpdate:false
      }


    case CO_REMOVE_REQUEST:
        return { 
          state,
          fetchinUpdate:true
        }
    case CO_REMOVE_SUCCESS:
      alert('delete success')
      return {
        state,
        fetchinUpdate:false
      }
    case CO_REMOVE_FAILRUE:
      alert('delete fail')
      return {
        state,
        fetchinUpdate:false
      }

    case CO_LIST_REQUEST:
      console.log('co_list_request');
      return {
        ...state,
        fetchinUpdate:true
      }

    case CO_LIST_SUCCESS:
      console.log('list_success_data:'+ action.data);
      return {
        ...state,
        comments:action.data,
        fetchinUpdate:false
      }

    case CO_LIST_FAILRUE:
      alert('co_loading_fail')  
      return{
          ...state,
          fetchinUpdata:false
        }

    case CO_REVISION_REQUEST: 
      return {
        state,
        fetchinUpdate:true
      }
    case CO_REVISION_SUCCESS: 
      console.log('success_ revision')
      return {
        ...state,
        fetchinUpdate:false
      }
    case CO_REVISION_FAILRUE: 
      alert('co_loading_fail')  
      return {
        state,
        fetchinUpdate:false
      }

    default:
      return state ;
  }
}
                      

export default reducer;