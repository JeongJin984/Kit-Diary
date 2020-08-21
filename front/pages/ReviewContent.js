import React,{useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import { Button, FormControl, FormGroup, Form, Container, Row, Col } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard';
import Comments from '../components/Comments';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import {post_list} from '../reducers/post'

const ReviewContent = () => {
    const router = useRouter();
    console.log(router.query.id);
    console.log();

    const { posts } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const {id} = router.query;
    console.log(posts[id]);

    useEffect(() => {
        dispatch(post_list());
    }, []);


    // id: 1, //primery key
    // userid: 0, //foreigin key
    // writer: '박기남',
    // date: 0,
    // star : 5,
    // classification : '전공',
    // professor: 'ggg',
    // class: '기초프로그래밍',
    // title: '좋아용',
    // contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
    // like: 3,
    // dislike: 1,

    return (
        <AppLayout>
            <Container style={{ width: "80%", margin: "auto" }}>
                <Form.Row style={{ marginTop: "60px" }}>
                    <Form.Label>
                        <h2>후기제목</h2>
                    </Form.Label>
                </Form.Row>
                <Form.Row>
                    <Form.Label>
                        <div><b>{posts[id].writer}</b>  &nbsp;  2020/01/01  &nbsp; 추천수: <b>{posts[id].like}</b></div>
                    </Form.Label>
                </Form.Row>
                <Form.Row style={{ marginTop: "10%" }}>
                    <b>과목명: &nbsp;&nbsp; </b> {posts[id].class}
                </Form.Row>
                <Form.Row style={{ marginTop: "12px" }}>
                    <b>교수님: &nbsp;&nbsp; </b>{posts[id].professor}
                </Form.Row>
                <Form.Row style={{ marginTop: "12px" }}>
                    <b>평점: &nbsp;&nbsp;  </b> {new Array(posts[id].star).fill(0).map(()=><b>★</b>)}
                </Form.Row>
                <Form.Row style={{ marginTop: "10%", marginBottom: "10%" }}>
                    후기내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<pre />
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </Form.Row>
                <Form.Row>
                    <Button variant="outline-info" style={{ marginLeft: "45%" }}>👍{posts[id].like}</Button>{' '}
                    <Button variant="outline-info" style={{ marginLeft: "10px" }}>👎{posts[id].dislike}</Button>{' '}
                </Form.Row>
                <Form.Row style={{ marginTop: "10%" }}>
                </Form.Row>

                <Comments />
            </Container>
        </AppLayout>
    );
}

export default ReviewContent;