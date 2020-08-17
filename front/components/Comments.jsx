import React, { Component } from 'react';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate'
import Link from 'next/link';

export default class Comments extends Component {
  getComments = () => {
    const comments = [
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
    return comments;
  }

  state = {
    currentPage:1,
    comments: this.getComments(),
    pageSize: 10 // 한 페이지에 보여줄 아이템 개수
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page }); // 페이지 수 클릭 시 현재 페이지 변경
  }

  render() {
    const { length: count } = this.state.comments;
    const {pageSize, currentPage, comments: allcomments} =this.state;

    if (count === 0)
      return <p><br></br>아무글도 없습니다. 댓글을 작성해주세요.</p>

    const comments = paginate(allcomments, currentPage,pageSize)

    return (
      <React.Fragment>
        <p><br></br>{count} 개의 댓글이 있습니다.</p>

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
            {comments.map(comment =>
            <Link href={`/FreecommentContent#id:${comment.id}`}>
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.title}</td>
                <td>{comment.writer}</td>
                <td>{comment.release}</td>
                <td>{comment.view}</td>
                <td>{comment.like}</td>
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