import React, {useState, useCallback,useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl, Container } from 'react-bootstrap'

import Link from 'next/link';
import {useDispatch} from 'react-redux'
import {post_save} from '../reducers/post'


const write = () => {
    // {
    //     id: 1, //primery key
    //     userid: 0, //foreigin key

    //     date: 0,
    //     star : 5,

    //     classification : '전공',
    //     professor: 'ggg',
    //     class: '기초프로그래밍',
    //     title: '좋아용',
    //     contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',

    //     like: 3,
    //     dislike: 1,
    //   },

  const dispatch = useDispatch();

  const [star, setStar] = useState(0);
  
  const [classification, setClassifcation] = useState('');
  const [professor, setProfessor] = useState('');
  const [class_, setClass] = useState('')
  const [title, setTitle] = useState('');
  const [contents, setContents]= useState('');


  const handleSelect = useCallback((e) => {
		console.log(e.target.value);
		setClassifcation(e.target.value)
		},
		[]
  );

  const onChangeClass = useCallback(
		(e) => {
			setClass(e.target.value)
			console.log(class_)
		},
		[],
  ) 

  const onChangeProfessor = useCallback(
		(e) => {
			setProfessor(e.target.value)
		},
	[],
  )

  const onChangeTilte = useCallback(
		(e) => {
			setTitle(e.target.value)
		},
		[],
  )

  const onChangeStar = useCallback(
      (e) => {
				setStar(parseInt(e.target.value));
      },
		[],
  )
  const onChangeContents = useCallback(
    (e) => {
			setContents(e.target.value);
    },
	[],
)

  useEffect(() => {
    setClassifcation('Major');
  }, []);



  const onSubmitPostForm = useCallback(
		(e) => {
			e.preventDefault();

			var like = 0;
			var dislike = 0;
			var userid = JSON.parse(sessionStorage.getItem('user')).id;
			

			dispatch(post_save({userid, date,star, classification, professor, class_ ,title,contents, like, dislike}))
			},
			[star, classification,professor,class_,title,contents]
  );
  
	return (
		<>
			<AppLayout>
				<br /><br />
				<Container style={{ width: "80%", margin: "auto" }}>
					<Form  onSubmit ={onSubmitPostForm}>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Control as="select" onChange = {handleSelect}>
								<option value = "Major" >전공</option>
								<option value = "MSC">MSC</option>
								<option value = "General">교양</option>
							</Form.Control>
						</Form.Group>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroup-sizing-default" >과목명</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl value = {class_} onChange = {onChangeClass}/>
						</InputGroup>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroup-sizing-default" >교수님</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl value = {professor} onChange = {onChangeProfessor}/>
						</InputGroup>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroup-sizing-default">제목</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl  value = {title} onChange = {onChangeTilte}/>
						</InputGroup>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroup-sizing-default">별점</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Check style={{margin:"10px"}}
								type="radio"
								label="1점"
								name="formHorizontalRadios"
								id="formHorizontalRadios1"
								value = "1" 
								onChange = {onChangeStar}
							/>
							<Form.Check style={{margin:"10px"}}
								type="radio"
								label="2점"
								name="formHorizontalRadios"
								id="formHorizontalRadios2"
								value = "2"
								onChange = {onChangeStar}
							/>
							<Form.Check style={{margin:"10px"}}
								type="radio"
								label="3점"
								name="formHorizontalRadios"
								id="formHorizontalRadios2"
								value = "3"
								onChange = {onChangeStar}
							/>
							<Form.Check style={{margin:"10px"}}
								type="radio"
								label="4점"
								name="formHorizontalRadios"
								id="formHorizontalRadios2"
								value = "4"
								onChange = {onChangeStar}
							/>
							<Form.Check style={{margin:"10px"}}
								type="radio"
								label="5점"
								name="formHorizontalRadios"
								id="formHorizontalRadios2"
								value = "5"
								onChange = {onChangeStar}
							/>
						</InputGroup>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>내용</Form.Label>
							<Form.Control as="textarea" rows="3" placeholder="내용을 입력하세요" value = {contents} onChange = {onChangeContents}/>
						</Form.Group>
						<br/>
						<Button as="input" type="submit" value="완료" />{' '}
					</Form>
				</Container>
			</AppLayout>
		</>
	);
}

export default write;