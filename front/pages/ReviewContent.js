import React, {useEffect, useState,useMemo} from 'react';
import AppLayout from '../components/AppLayout';
import { Button, FormControl, FormGroup, Form, Container, Row, Col } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard';
import Comments from '../components/Comments'
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import {post_revision} from '../reducers/post'
import Nickname from '../components/Nickname';


const ReviewContent = () => {
	const router = useRouter();
	const [like_rendering, setlike_Render] = useState(false);
	const [dislike_rendering, setdislike_Render] = useState(false);

	const [islogined, setLogin] = useState(false);
	const dispatch = useDispatch();

	var review = router.query;
	console.log(review);

	const up_like = () =>{
		if(like_rendering ===false && islogined === true){
			var like = parseInt(review.like);
			like += 1;
			review.like = String(like);
			setlike_Render(true);
			dispatch(post_revision(review))
		} 
	}

	const up_dislike = () =>{
		if(dislike_rendering ===false && islogined === true){
			var dislike = parseInt(review.dislike);
			dislike += 1;
			review.dislike = String(dislike);
			setdislike_Render(true);
			dispatch(post_revision(review))
		} 
	}
	
	useEffect(() => {
		console.log('router'+router.query.userid);
		setLogin(JSON.parse(sessionStorage.getItem('islogined')));
	}, []);
	
	return (
		<AppLayout>
			<Container style={{ width: "80%", margin: "auto" }}>
				<Form.Row style={{ marginTop: "60px" }}>
					<Form.Label>
						<h2>{review.title}</h2>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
						<div><b><Nickname userid = {review.userid}/></b>  &nbsp;  {review.date} &nbsp; 추천수: <b>{review.like}</b></div>
					</Form.Label>
				</Form.Row>
				<hr />
				<Form.Row style={{ marginTop: "10%" }}>
				<table>
					<tbody>
							<tr>
								<td style={{ textAlign: "right" }}>
									<b>과목분류 </b>
								</td>
								<td style={{ paddingLeft: "50px" }}>
									{review.classification}
								</td>
							</tr>
							<tr>
								<td style={{ paddingTop: "15px" }}>
								</td>
							</tr>
							<tr>
								<td >
										<b>과목명 </b>
								</td>
								<td style={{ paddingLeft: "50px" }}>
										{review.class}
								</td>
							</tr>
							<tr>
								<td style={{ paddingTop: "15px" }}>
								</td>
							</tr>
							<tr>
								<td >
										<b>교수님 </b>
								</td>
								<td style={{ paddingLeft: "50px" }}>
										{review.professor}
								</td>
							</tr>
							<tr>
								<td style={{ paddingTop: "15px" }}>
								</td>
							</tr>
						<tr>
							<td style={{ }}>
									<b>평점</b>
							</td>
							<td style={{ paddingLeft: "50px" }}>
									{new Array(review.star).fill(0).map(()=><b>★</b>)}
							</td>
						</tr>
					</tbody>
				</table>
				</Form.Row>
				<Form.Row style={{ marginTop: "10%", marginBottom: "10%" }}>
						후기내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<pre />
						~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				</Form.Row>

				<Form.Row style={{ marginBottom: "35px" }}>
					<Button onClick ={up_like} variant="outline-info" style={{ marginLeft: "45%" }}>👍{review.like}</Button>{' '}
					<Button onClick = {up_dislike} variant="outline-info" style={{ marginLeft: "10px" }}>👎{review.dislike}</Button>{' '}
				</Form.Row>

				<Form.Row style={{ marginTop: "10%" }}>
						<Comments postid = {review.id} />
				</Form.Row>

			</Container>
			<Form.Row style={{ marginTop: "10%" }}></Form.Row>
		</AppLayout>
	);
}

export default ReviewContent;