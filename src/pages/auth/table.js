import React, { Component, Fragment } from 'react';
import { Card, Table, Divider, Tag } from 'antd';

import Wrapper from '../base/_Wrapper';
import { fetchDoubanTop250 } from '../../api/TableReq';

class TablePage extends Component {

  columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    width: 60
  }, {
    title: '影片',
    dataIndex: 'title',
    key: 'title',
    width: 250,
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '评分',
    dataIndex: 'rate',
    key: 'rate',
    width: 100
  }, {
    title: '演员',
    dataIndex: 'casts',
    key: 'casts',
  }, {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    width: 200,
    render: tags => (
      <span>
        {tags.map((tag, i) => {
          let color = 'geekblue';
          if (i % 3 === 1) {
            color = 'green';
          } else if (i % 3 === 2) {
            color = 'volcano';
          }
          return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
        })}
      </span>
    ),
  }];

  state = {
    loading: false,
    total: 0,
    pageNo: 1,
    pageSize: 20,
    movies: []
  };

  componentDidMount() {
    const { pageNo, pageSize } = this.state;
    this.handleFetch({ pageNo, pageSize });
  }

  handleFetch = ({ pageNo, pageSize }) => {
    this.setState({ loading: true });
    fetchDoubanTop250({ pageNo, pageSize })
      .then((res) => {
        const { subjects, total } = res;
        const movies = subjects.map((subject, index) => ({
          key: subject.id,
          index: index + 1 + (pageNo - 1) * pageSize,
          title: subject.title,
          rate: subject.rating.average,
          casts: subject.casts.map(c => c.name).join('，'),
          tags: subject.genres
        }));
        this.setState({ movies, total, pageNo, pageSize });
      })
      .finally(() => { this.setState({ loading: false }); });
  };

  handleChangePage = (pageNo, pageSize) => {
    this.handleFetch({ pageNo, pageSize });
  };

  render() {
    const { movies, loading, total } = this.state;
    return (
      <Fragment>
        {/* <Card>
          查询条件
        </Card>
        <div style={{ height: '1rem' }} /> */}
        <Card title="豆瓣电影Top250">
          <Table
            size="middle"
            bordered
            loading={loading}
            dataSource={movies}
            columns={this.columns}
            pagination={{ pageSize: 20, total, onChange: this.handleChangePage }}
          ></Table>
        </Card>
      </Fragment>
    );
  }
}

export default Wrapper(TablePage);
