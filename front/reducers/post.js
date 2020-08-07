
export const initialState = {
}

const BOARD_SAVE = ' BOARD_SAVE';
const BOARD_REMOVE = 'BOARD_REMOVE';
const BOARD_READ = 'BOARD_READ';
const BOARD_LIST = 'BOARD_LIST';


const reducer = (state=initialState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return {
			}
	
		default:
			return state
	}
}

export default reducer