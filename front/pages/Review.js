import React from 'react';
import AppLayout from '../components/AppLayout';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useSelector} from 'react-redux';

// id: 1, //primery key
// userid: 0, //foreigin key
// star : 3,
// classification : '전공',
// professor: '고재필',
// class: '기초프로그래밍',
// title: '좋아용',
// contents:'너무 좋아용',
// Like: 3,
// DisLike: 1,

const Review = () => {
	const { posts } = useSelector(state => state.post);
	console.log(posts)

	const postlist = posts.map(
			(post,i) => (
				<Card border="info" style={{ width: '18rem', margin: "20px"}}>
					<Card.Header>{post.classification}</Card.Header>
					<Card.Body>
						<Card.Title>{post.class}</Card.Title>
						<Card.Subtitle>{post.professor}</Card.Subtitle>
						<Card.Text>{post.contents}</Card.Text>
					</Card.Body>
				</Card>
			)
		);


	return(
		<>
			<AppLayout>
				<br/><br/>
					<Container style={{marginLeft: "70px"}}>
						<Button variant="outline-info" style={{  margin:"10px", marginLeft: "20px"}}>전공</Button>{' '}
						<Button variant="outline-info" style={{ margin: "10px"}}>MSC</Button>{' '}
						<Button variant="outline-info" style={{ margin: "10px"}}>교양</Button>{' '}
							<Row style={{margin:"auto"}}>
								{postlist}
							</Row>
					</Container>
			</AppLayout>
		</>
	);
}

export default Review;