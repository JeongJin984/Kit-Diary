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
          <h5>닉네임1 <h6 style={{float:"right"}}>2020.08.19 08:45</h6></h5>
          <p>
            댓글내용 <div style={{float:"right"}}>👍8&nbsp;&nbsp;&nbsp;👎2</div><br/>
          </p><br/>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="/profile.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>닉네임2<h6 style={{float:"right"}}>2020.08.19 09:45</h6></h5>
              <p>
                댓글내용 <div style={{float:"right"}}>👍8&nbsp;&nbsp;&nbsp;👎2</div>
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media><br/><br/>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="/profile.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>닉네임3<h6 style={{float:"right"}}>2020.08.19 11:55</h6></h5>
          <p>
            댓글내용 <div style={{float:"right"}}>👍8&nbsp;&nbsp;&nbsp;👎2</div>
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