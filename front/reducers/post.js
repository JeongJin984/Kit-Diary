export const initialState = {
  post:[  
    {
      id: 1, //primery key
      star : 0,
      title: '',
      postprofessor: '',
      class: '',
      Like: 0,
      DisLike: 0,
    },
    {
      id: 2, //primery key
      Star : 0,
      Title: '',
      PostProfessor: '',
      Class: '',
      Like: 0,
      DisLike: 0,
    },
  ]
}

const _SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'ONE';
const BOARD_LIST = 'LIST';

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