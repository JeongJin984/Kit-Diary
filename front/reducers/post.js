export const initialState = {
  posts:[  
    {
      id: 1, //primery key
      userid: 0, //foreigin key
      star : 3,
      classification : '전공',
      professor: '고재필',
      class: '기초프로그래밍',
      title: '좋아용',
      contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
      Like: 3,
      DisLike: 1,
    },
    {
      id: 1, //primery key
      userid: 0, //foreigin key
      star : 3,
      classification : '전공',
      professor: '김성영',
      class: '자바프로그래밍',
      title: '좋아용',
      contents:'너무 좋아용sdfsddsfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      Like: 3,
      DisLike: 1,
    },
    {
      id: 1, //primery key
      userid: 0, //foreigin key
      star : 3,
      classification : '전공',
      professor: '김성영',
      class: '자바프로그래밍',
      title: '좋아용',
      contents:'너무 좋아용sdfsddsfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      Like: 3,
      DisLike: 1,
    },
    {
      id: 1, //primery key
      userid: 0, //foreigin key
      star : 3,
      classification : '전공',
      professor: '김성영',
      class: '자바프로그래밍',
      title: '좋아용',
      contents:'너무 좋아용sdfsddsfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      Like: 3,
      DisLike: 1,
    },
  ]
}

export const POST_SAVE = 'POST_SAVE';
export const POST_REMOVE = 'POST_REMOVE';
export const POST_READ = 'POST_READ';
export const POST_LIST = 'POST_LIST';

export const post_save = (data) => {
  console.log('post_save');
  return{
    type: 'POST_SAVE',
    data: data
  }
}
export const post_remove = (id) => {
  console.log('post_remove');
  return{
    type: 'POST_REMOVE',
    data: id
  }
}
export const post_read = (id) => {
  console.log('post_read');
  return{
    type: 'POST_READ',
    data: id
  }
}
export const post_list = () => {
  console.log('post_list');
  return{
    type: 'POST_LIST'
  }
}

const reducer = (state=initialState, action) =>{
  switch(action.type){
    case POST_SAVE:
      return {

      }
    case POST_REMOVE:
      return { 
  
      }
    case POST_READ: 
      return {

      }
    case POST_LIST:
      return {

      }
    default:
      return state ;
  }
}
                      

export default reducer