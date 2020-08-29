import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import { Table, Row, Col, Form, FormControl, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MDBDataTable, MDBBox } from "mdbreact";

const TimeTable = () => {
  const data = {
    columns: [
      {
        label: "과목코드",
        field: "classNum",
        sort: "asc",
        width: 100,
      },
      {
        label: "과목명",
        field: "classclassNum",
        sort: "asc",
        width: 300,
      },
      {
        label: "강의실",
        field: "classRoom",
        sort: "asc",
        width: 200,
      },
      {
        label: "강의시간",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "담당교수",
        field: "professor",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        classNum: "CD0005-01",
        classclassNum: "디지털공학",
        classRoom: "D128",
        date: "화8,수67",
        professor: "한규필",
      },
      {
        classNum: "CD0005-02",
        classclassNum: "디지털공학",
        classRoom: "D128",
        date: "화9,수89",
        professor: "한규필",
      },
      {
        classNum: "CD0005-03",
        classclassNum: "디지털공학",
        classRoom: "D129",
        date: "화8,수67",
        professor: "전준철",
      },
      {
        classNum: "CD0005-04",
        classclassNum: "디지털공학",
        classRoom: "D129",
        date: "화9,수89",
        professor: "전준철",
      },
      {
        classNum: "CD0060-01",
        classclassNum: "C프로그래밍",
        classRoom: "D129",
        date: "월4,화34",
        professor: "김영학",
      },
      {
        classNum: "CD0060-02",
        classclassNum: "C프로그래밍",
        classRoom: "D127",
        date: "월4,화34",
        professor: "황준하",
      },
      {
        classNum: "CD0060-03",
        classclassNum: "C프로그래밍",
        classRoom: "D127",
        date: "월6,화67",
        professor: "황준하",
      },
      {
        classNum: "CD0060-04",
        classclassNum: "C프로그래밍",
        classRoom: "D229",
        date: "월6,화67",
        professor: "이이섭",
      },
      {
        classNum: "CD0061-01",
        classclassNum: "C프로그래밍응용",
        classRoom: "D230",
        date: "목789",
        professor: "손기봉",
      },
      {
        classNum: "CD0061-02",
        classclassNum: "C프로그래밍응용",
        classRoom: "D230",
        date: "금123",
        professor: "손기봉",
      },
      {
        classNum: "CD0061-03",
        classclassNum: "C프로그래밍응용",
        classRoom: "D229",
        date: "목789",
        professor: "조재한",
      },
      {
        classNum: "CD0061-04",
        classclassNum: "C프로그래밍응용",
        classRoom: "D229",
        date: "금123",
        professor: "조재한",
      },
      {
        classNum: "CD0013-01",
        classclassNum: "컴퓨터구조",
        classRoom: "D129",
        date: "월3,화56",
        professor: "오길호",
      },
      {
        classNum: "CD0013-02",
        classclassNum: "컴퓨터구조",
        classRoom: "D129",
        date: "월2,목56",
        professor: "오길호",
      },
      {
        classNum: "CD0013-03",
        classclassNum: "컴퓨터구조",
        classRoom: "D129",
        date: "화2,목56",
        professor: "오길호",
      },
      {
        classNum: "CD0065-01",
        classclassNum: "소프트웨어분석및설계",
        classRoom: "D229",
        date: "월7,수67",
        professor: "김영학",
      },
      {
        classNum: "CD0065-02",
        classclassNum: "소프트웨어분석및설계",
        classRoom: "D127",
        date: "월7,수67",
        professor: "황준하",
      },
      {
        classNum: "CD0065-03",
        classclassNum: "소프트웨어분석및설계",
        classRoom: "D229",
        date: "수2,금23",
        professor: "윤현주",
      },
      {
        classNum: "CD0065-04",
        classclassNum: "소프트웨어분석및설계",
        classRoom: "D127",
        date: "수2,금23",
        professor: "정진우",
      },
    ],
  };

  function AddTimeTable() {
    const [lgShow, setLgShow] = useState(false);

    return (
      <>
        <Button onClick={() => setLgShow(true)}>추가</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          style={{ marginTop: "10%" }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="example-modal-sizes-title-lg"
              style={{ marginLeft: "42%" }}
            >
              <b>시간표 추가</b>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Row>
                <Form.Label column lg={4}>
                  과목 이름
                </Form.Label>
                <Col>
                  <Form.Control type="text" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={4}>
                  교수님
                </Form.Label>
                <Col>
                  <Form.Control type="text" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row style={{ width: "270px" }}>
                <Form.Label column lg={2}>
                  요일
                </Form.Label>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      style={{ width: "100px" }}
                    >
                      <option>월</option>
                      <option>화</option>
                      <option>수</option>
                      <option>목</option>
                      <option>금</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row style={{ width: "270px" }}>
                <Form.Label column lg={2}>
                  시간
                </Form.Label>
                <Col style={{ width: "100px" }}>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      style={{ width: "100px" }}
                    >
                      <option>09:00</option>
                      <option>10:00</option>
                      <option>11:00</option>
                      <option>12:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                      <option>17:00</option>
                      <option>18:00</option>
                      <option>19:00</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                ~
                <Col style={{ width: "70px" }}>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      style={{ width: "100px" }}
                    >
                      <option>09:00</option>
                      <option>10:00</option>
                      <option>11:00</option>
                      <option>12:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                      <option>17:00</option>
                      <option>18:00</option>
                      <option>19:00</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <br />
              <Button type="submit" className="mb-2">
                저장
              </Button>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  return (
    <AppLayout>
      <br />
      <br />

      <MDBBox display="flex" justifyContent="center">
        <MDBDataTable
          hover
          striped
          bordered
          small
          scrollY="20vh"
          data={data}
          style={{ width: "1000px", cursor: "pointer" }}
        />
      </MDBBox>

      <Row style={{ marginLeft: "80%" }}>
        <Col style={{ width: "300px" }}>
          <div style={{ width: "200px" }}>
            <AddTimeTable />
            <Button variant="outline-info">수정</Button> <br />
            <br />
          </div>
        </Col>
      </Row>
      <br />
      <Table
        responsive="sm"
        border="5"
        align="center"
        bgcolor="F4FFFF"
        bordercolor="E8F5FF"
        style={{ width: "1000px", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>시간</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>09:00</td>
          </tr>
          <tr>
            <td>2교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>10:00</td>
          </tr>
          <tr>
            <td>3교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>11:00</td>
          </tr>
          <tr>
            <td>4교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>12:00</td>
          </tr>
          <tr>
            <td>5교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>13:00</td>
          </tr>
          <tr>
            <td>6교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>14:00</td>
          </tr>
          <tr>
            <td>7교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>15:00</td>
          </tr>
          <tr>
            <td>8교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>16:00</td>
          </tr>
          <tr>
            <td>9교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>17:00</td>
          </tr>
          <tr>
            <td>10교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>18:00</td>
          </tr>
          <tr>
            <td>11교시</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
            <td rowspan="2">Table cell</td>
          </tr>
          <tr>
            <td>19:00</td>
          </tr>
        </tbody>
      </Table>
    </AppLayout>
  );
};

export default TimeTable;
