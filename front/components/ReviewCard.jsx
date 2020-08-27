import React, {useState,useEffect} from 'react';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate'
import { Card, Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';

const ReviewCard = ({posts}) => {
  const [currentPage,setCurpage] = useState(1);//현재 페이지
  const [pageSize,setTotalpage] = useState(9);// 한 페이지에 보여줄 아이템 개수
  const count = posts.length; //게시글 갯수
  console.log(posts);

  const reviews = paginate(posts, currentPage, pageSize)

  const handlePageChange = (page) => {
    setCurpage(page); // 페이지 수 클릭 시 현재 페이지 변경
  }


  return(
	<div>
		<React.Fragment>
			<Container style={{ marginLeft: "70px" }}>
				<Row>
					{reviews.map(review =>
						<Link href={{pathname:'/ReviewContent', query: review}} >
						<Card border="info" style={{width:"23%", height:"290px",margin:"30px"}}>
							<Card.Header>{review.classification}</Card.Header>
							<Card.Body>
								<Card.Title style={{textAlign:"center", marginBottom:"25px"}}><b>{review.class}</b></Card.Title>
								<Card.Subtitle style={{textAlign:"center"}} ><b>{review.professor}</b> 교수님</Card.Subtitle>
								<Card.Text style={{textAlign:"center",color:"#EECC00",fontSize:"25px"}}> {new Array(review.star).fill(0).map(()=><b>★</b>)}</Card.Text>
								<Card.Text style={{fontSize:"13px", marginTop:"20px"}}>{review.contents}</Card.Text>
								<Card.Text style={{fontSize:"15px",textAlign:"center", marginTop:"3px"}} >{review.like}👍 {review.dislike}👎</Card.Text>
							</Card.Body>
						</Card>
						</Link>
				)}
			</Row>
			</Container>
			<Pagination
				itemsCount={count}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
	</React.Fragment >
	</div>
  );
}

export default ReviewCard;