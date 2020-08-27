import React, { useState, useEffect } from 'react';
import { Card, Tabs, Table, Tab, Button, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import AppLayout from '../components/AppLayout';
import Toast from 'react-bootstrap/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {post_list} from '../reducers/post'
import Pagination from '../components/common/pagination';
import { paginate } from '../utils/paginate'

  
const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
  
  const [currentPage,setCurpage] = useState(1);//현재 페이지
  const [pageSize,setTotalpage] = useState(5);// 한 페이지에 보여줄 아이템 개수
  const count = posts.length; //게시글 갯수
  const reviews = paginate(posts, currentPage, pageSize)
	
  const handlePageChange = (page) => {
    setCurpage(page); // 페이지 수 클릭 시 현재 페이지 변경
  }

	useEffect(() => {
		dispatch(post_list());
  }, []);
  

	return (
		<>
			<AppLayout>
				<br />
					<Accordion defaultActiveKey="0">
						<Carousel
							style={{
								width: '900px',
								marginTop: '10px',
								margin: 'auto',
								marginBottom: '40px',
							}}
						>
							
						<Carousel.Item>
							<img className="d-block w-100" src="/1.jpg" alt="First slide" />
							<Carousel.Caption>
								<h3>오름이</h3>
								<p>오름1동에 살고 있는 고양이 오름이</p>
							</Carousel.Caption>
						</Carousel.Item>
							
						<Carousel.Item>
							<img className="d-block w-100" src="/2.jpg" alt="Third slide" />
							<Carousel.Caption>
								<h3>금오공과대학교 운동장</h3>
								<p>By 연서</p>
							</Carousel.Caption>
						</Carousel.Item>
								
						<Carousel.Item>
							<img className="d-block w-100" src="/3.jpg" alt="Third slide" />
							<Carousel.Caption>
								<h3>모카</h3>
								<p>자고 있는 모카</p>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="d-block w-100" src="/4.jpg" alt="Third slide" />
							<Carousel.Caption>
								<h3>금오공대 하늘</h3>
							</Carousel.Caption>
						</Carousel.Item>

						</Carousel>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									자유게시판
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<Table responsive="sm"  className="table table-hover">
											<thead>
											</thead>
											<tbody>
													<tr>
														<td>글제목1 👍1 작성자: 아무개</td>
													</tr>
													<tr>
														<td>글제목2 👍2 작성자: 아무개</td>
													</tr>
													<tr>
														<td>글제목3 👍3 작성자: 아무개</td>
													</tr>
											</tbody>
										</Table>
									</Card.Body>
								</Accordion.Collapse>

							</Card>

							<Card>

								<Accordion.Toggle as={Card.Header} eventKey="2">
									강의후기
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="2">
									<Card.Body>
										<Table responsive="sm"  className="table table-hover">
											<thead>
											</thead>
											<tbody>
												{reviews.map(review =>
													<tr>
														<Link href={{pathname:'/ReviewContent', query: review}} >
														<td>과목이름: {review.class}  {review.title} 👍{review.like} </td>
														</Link>
													</tr>
												)}
												<Pagination
													itemsCount={count}
													pageSize={pageSize}
													currentPage={currentPage}
													onPageChange={handlePageChange}
												/>
											</tbody>
										</Table>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
					</Accordion>
			</AppLayout>
		</>
	);
};

export default Home;
