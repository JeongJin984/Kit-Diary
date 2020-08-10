
export const initialState = {
    maxNo: 3,
    boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'is tile 1',
                brdcontents: 'is contants1',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'salmon2',
                brdtitle: 'salmons_brd',
                brdcontents: 'is contants2',
                brddate: new Date()
            }    
    ],
    selectedBoard: {}
}

export const board_save = (data) => ({ 
    type: BOARD_SAVE,
    data
});

export const board_remove = (brdno) => ({ 
    type: BOARD_REMOVE,
    brdno: brdno
});

export const board_read = (brdno) => ({ 
    type: BOARD_READ,
    brdno: brdno
});

export const board_list = () => ({ type: BOARD_LIST });

const BOARD_SAVE = ' BOARD_SAVE';   //생성
const BOARD_REMOVE = 'BOARD_REMOVE';    //삭제
const BOARD_READ = 'BOARD_READ';    //읽기
const BOARD_LIST = 'BOARD_LIST';    //갱신


const reducer = (state=initialState, action) => {
	switch (action.type) {
		case 'BOARD_SAVE':
            let data = action.data;
            let maxNo = state.maxNo;
            if (!data.brdno) {    // new : Insert
                return {maxNo: maxNo+1, boards: boards.concat({...data, brdno: maxNo, brddate: new Date()}), selectedBoard: {} };
            } 
            return {...state, boards: boards.map(row => data.brdno === row.brdno ? {...data }: row), selectedBoard: {} };
		case 'BOARD_REMOVE':
            return {...state, boards: boards.filter(row => row.brdno !== action.brdno), selectedBoard: {}};
            
        case 'BOARD_READ':
            return {
                ...state,
                selectedBoard: boards.find(row => row.brdno === action.brdno)
           };
		default:
			return state
	}
}

export default reducer