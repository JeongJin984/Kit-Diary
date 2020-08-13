import React, { Component } from 'react';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate'
import { Card, Row, Col, Container } from 'react-bootstrap';

export default class ReviewCard extends Component {
    getReviews = () => {
        const reviews = [
            { id: 1, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용~~~너무길면 ...으로 바꿀수 있나요?", like: "0" },
            { id: 2, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 3, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 4, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 5, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 6, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 7, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 8, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 9, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
            { id: 10, class: "MSC", subjectName: "이산수학", professor: "오길호 교수님", time: "월34 목3", star: "★★★★★", text: "내용", like: "0" },
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
                    <Card border="info" style={{width:"23%", height:"250px",margin:"30px"}}>
                        <Card.Header>{review.class}</Card.Header>
                        <Card.Body>
                            <Card.Title>{review.subjectName}</Card.Title>
                            <Card.Subtitle>{review.professor}<br />{review.time}</Card.Subtitle>
                            <Card.Text>
                                {review.star}<br />{review.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
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