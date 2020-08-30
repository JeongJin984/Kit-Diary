import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { Media, Container, Form, Button } from 'react-bootstrap';
import {co_listAction} from '../reducers/comment'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate'
import {userAction} from '../reducers/user'
import Nickname from './Nickname';

const Comments = (data) => {
  const postid = data.postid;
  const { comments } = useSelector(state => state.comment);
  const dispatch = useDispatch();

  const [currentPage,setCurpage] = useState(1);//현재 페이지
  const [pageSize,setTotalpage] = useState(5);// 한 페이지에 보여줄 아이템 개수
  const count = comments.length; //게시글 갯수

  const page_comments = paginate(comments, currentPage, pageSize)

  const handlePageChange = (page) => {
    setCurpage(page); // 페이지 수 클릭 시 현재 페이지 변경
  }

  const [islogined, setLogin] = useState();

  useEffect(() => {
		setLogin(JSON.parse(sessionStorage.getItem('islogined')));
    dispatch(co_listAction(postid));
	}, []);

  return(
    <Container>
      <hr/><br/>
      {page_comments.map(comment =>
        <>
          <Media>
          <Media.Body>
            <h5><Nickname userid = {comment.userid}/></h5>
            <p>
              {comment.contents} <div style={{float:"right"}}>👍{comment.like}&nbsp;&nbsp;&nbsp;👎{comment.dislike}</div><br/>
            </p><br/>
          </Media.Body>
        </Media><br/><br/>
				</>
      )}
      <Pagination
				itemsCount={count}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>

      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows="3" placeholder="댓글을 입력하세요"/>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" style={{float: "right"}}>등록</Button>
    </Container>
  );
}

export default Comments;