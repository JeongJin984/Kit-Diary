import React from 'react';
import AppLayout from '../components/AppLayout';
import Table from 'react-bootstrap/Table';
import {Button, FormControl} from 'react-bootstrap'
import BoardsPage from '../components/BoardsPage';
import Link from 'next/link'

const FreeBoard = () => {
    return(
        <AppLayout>
            <div style={{ float: 'right', marginRight: "0%" }}>
            <FormControl class="inline"  type="text" placeholder="Search" style={{height: "35px", paddingBottom:"7px"}}  />
                    <Button variant="outline-info" style={{ width: "60px",  marginLeft:"10px", marginRight:"20px"}}>검색</Button>
                    <Link href="/ReviewWrite"><a><Button variant="outline-info" style={{margin:"10px"}}>글쓰기</Button>{' '} </a></Link>
                    </div>
            <BoardsPage/>
        </AppLayout>
    );
}

export default FreeBoard;