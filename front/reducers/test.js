export const initialState = {
  test: 'first',
}
export const TEST_ACTION = 'TEST_ACTION'

export const setTest = (data) =>{

  return {
    type: 'TEST_ACTION',
  }
}

const reducer = (state=initialState, action) =>{
switch(action.type){
  case TEST_ACTION:
    return{
      ...state,
      test:'success',
    }
  default:
    return state 
  }
}

export default reducer