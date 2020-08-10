import React from 'react';
import AppLayout from '../components/AppLayout';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap'
import BoardsPage from '../components/BoardsPage';

const FreeBoard = () => {
    return(
        <AppLayout>
            <Button variant="outline-info" style={{float:'right',margin:"1%" ,marginRight: "6%"}}>글쓰기</Button>{' '}
            <BoardsPage/>
        </AppLayout>
    );
}

export default FreeBoard;