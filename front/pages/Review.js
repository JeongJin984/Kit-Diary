import React, {useState, useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import { Container, Row, Col, Button, FormControl, Form, InputGroup } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard';
import Link from 'next/link'
import {post_search} from '../reducers/post'
import { useSelector, useDispatch } from 'react-redux';
import {post_list} from '../reducers/post'

const Review = () => {
	const [islogined, setLogin] = useState(false);
	const dispatch = useDispatch();
	const { posts } = useSelector(state => state.post);

	useEffect(() => {
		setLogin(JSON.parse(sessionStorage.getItem('islogined')));
		dispatch(post_list());
	}, []);

	const search_Majorlist = () =>{
		dispatch(post_search({classification:"Major"})); 
	}

	const search_MSClist = () =>{
		dispatch(post_search({classification:"MSC"}));
	}

	const search_Generallist = () =>{
		dispatch(post_search({classification:"General"}));
	}
	const search_All = () =>{
		dispatch(post_list());
	}



	return (
		<>
			<AppLayout>
				<br></br>
				<Container style={{ marginLeft: "60px" }}>
					<Button onClick = {search_Majorlist} variant="outline-info" style={{ margin: "10px", marginLeft: "20px" }}>전공</Button>{' '}
					<Button onClick = {search_MSClist} variant="outline-info" style={{ margin: "10px" }}>MSC</Button>{' '}
					<Button onClick = {search_Generallist} variant="outline-info" style={{ margin: "10px" }}>교양</Button>{' '}
					<Button onClick = {search_All} variant="outline-info" style={{ margin: "10px" }}>전체</Button>{' '}
					<div style={{ float: 'right', marginRight: "14%" }}>
					{islogined&&<Link href="/ReviewWrite"><a><Button variant="outline-info" style={{margin:"10px"}}>후기쓰기</Button>{' '} </a></Link>}
					</div>
				</Container>
				<ReviewCard posts={posts}/>
			</AppLayout>
		</>
	);
}

export default Review;