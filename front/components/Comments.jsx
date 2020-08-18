import React from 'react';
import Link from 'next/link';
import { Media, Container, Form, Button } from 'react-bootstrap';

const Comments = () => {
  return(
    <Container>
      <hr/><br/>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="/profile.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>닉네임1</h5>
          <p>
            댓글내용
          </p>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="/profile.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>닉네임2</h5>
              <p>
                댓글내용
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media><br/>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="/profile.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>닉네임3</h5>
          <p>
            댓글내용
          </p>
        </Media.Body>
      </Media><br/><br/>
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