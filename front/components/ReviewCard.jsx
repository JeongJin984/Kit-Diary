import React, { Component } from 'react';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate'
import { Card, Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';

export default class ReviewCard extends Component {
    getReviews = () => {
        const reviews = [
            { id: 1, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★", contents: "내용~~~너무길면 ...으로 바꿀수 있나요?", like: "0",dislike:"0" },
            { id: 2, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~", like: "0",dislike:"0" },
            { id: 3, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 4, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 5, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 6, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 7, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 8, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 9, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
            { id: 10, classification: "MSC", class: "이산수학", professor: "오길호", star: "★★★★★", contents: "내용", like: "0",dislike:"0" },
        ]
        return reviews;
    }

    state = {
        currentPage: 1,
        reviews: this.getReviews(),
        pageSize: 9 // 한 페이지에 보여줄 아이템 개수
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page }); // 페이지 수 클릭 시 현재 페이지 변경
    }

    render() {
        const { length: count } = this.state.reviews;
        const { pageSize, currentPage, reviews: allReviews } = this.state;

        if (count === 0)
            return <p><br></br>아무 후기도 없습니다. 후기를 작성해주세요.</p>

        const reviews = paginate(allReviews, currentPage, pageSize)

        return (
            <React.Fragment>
                <Container style={{ marginLeft: "70px" }}>
                    <Row>
                {reviews.map(review =>
                    <Link href={`/ReviewContent#id:${review.id}`}>
                    <Card border="info" style={{width:"23%", height:"290px",margin:"30px"}}>
                        <Card.Header>{review.classification}</Card.Header>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center", marginBottom:"25px"}}><b>{review.class}</b></Card.Title>
                            <Card.Subtitle style={{textAlign:"center"}} ><b>{review.professor}</b> 교수님</Card.Subtitle>
                            <Card.Text style={{textAlign:"center",color:"#EECC00",fontSize:"25px"}}><b>{review.star}</b></Card.Text>
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
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment >
        );
    }
}