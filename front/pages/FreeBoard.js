import React, {useState, useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import Table from 'react-bootstrap/Table';
import {Button, FormControl} from 'react-bootstrap'
import BoardsPage from '../components/BoardsPage';
import Link from 'next/link'

const FreeBoard = () => {
  const [islogined, setLogin] = useState(false);

  useEffect(() => {
		setLogin(JSON.parse(sessionStorage.getItem('islogined')));
    console.log(islogined)
	}, []);

  return(
    <AppLayout>
      <div style={{ float: 'right', marginRight: "0%" }}>
        <FormControl class="inline"  type="text" placeholder="Search"  />
        <Button variant="outline-info" style={{ width: "60px", height: "40px"}}>검색</Button>
        {!islogined && <Link href="/ReviewWrite"><a><Button variant="outline-info" style={{margin:"10px"}}>후기쓰기</Button>{' '} </a></Link>}
      </div>
      <BoardsPage/>
    </AppLayout>
  );
}

export default FreeBoard;