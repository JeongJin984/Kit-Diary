import React, { Component } from 'react';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate'
import Link from 'next/link';

export default class BoardsPage extends Component {
  getBoards = () => {
    const boards = [
      { id: 1, title: "제목1", writer: "쓰니1", release: "2020-01-01", view:"2", like:"0" },
      { id: 2, title: "제목2", writer: "쓰니2", release: "2020-01-01", view:"2", like:"0" },
      { id: 3, title: "제목3", writer: "쓰니3", release: "2020-01-01", view:"2", like:"0" },
      { id: 4, title: "제목4", writer: "쓰니4", release: "2020-01-01", view:"2", like:"0" },
      { id: 5, title: "제목5", writer: "쓰니5", release: "2020-01-01", view:"2", like:"0" },
      { id: 6, title: "제목6", writer: "쓰니6", release: "2020-01-01", view:"2", like:"0" },
      { id: 7, title: "제목7", writer: "쓰니7", release: "2020-01-01", view:"2", like:"0" },
      { id: 8, title: "제목8", writer: "쓰니8", release: "2020-01-01", view:"2", like:"0" },
      { id: 9, title: "제목9", writer: "쓰니9", release: "2020-01-01", view:"2", like:"0" },
      { id: 10, title: "제목10", writer: "쓰니10", release: "2020-01-01", view:"2", like:"0" },
      { id: 11, title: "제목11", writer: "쓰니11", release: "2020-01-01", view:"2", like:"0" },
    ]
    return boards;
  }

  state = {
    currentPage:1,
    boards: this.getBoards(),
    pageSize: 10 // 한 페이지에 보여줄 아이템 개수
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page }); // 페이지 수 클릭 시 현재 페이지 변경
  }

  render() {
    const { length: count } = this.state.boards;
    const {pageSize, currentPage, boards: allBoards} =this.state;

    if (count === 0)
      return <p><br></br>아무글도 없습니다. 글을 작성해주세요.</p>

    const boards = paginate(allBoards, currentPage,pageSize)

    return (
      <React.Fragment>
        <p><br></br>{count} 개의 글이 있습니다.</p>

        <table className="table" className="table table-hover">
          <thead>
            <tr>
              <th width="2%">번호</th>
              <th width="20%">제목</th>
              <th width="4%">작성자</th>
              <th width="4%">날짜</th>
              <th width="2%">조회</th>
              <th width="2%">추천</th>
            </tr>
          </thead>
          <tbody>
            {boards.map(board =>
            <Link href={`/FreeBoardContent#id:${board.id}`}>
              <tr key={board.id}>
                <td>{board.id}</td>
                <td>{board.title}</td>
                <td>{board.writer}</td>
                <td>{board.release}</td>
                <td>{board.view}</td>
                <td>{board.like}</td>
              </tr>
              </Link>
            )}
          </tbody>
        </table>

        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}