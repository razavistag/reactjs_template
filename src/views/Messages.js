import React, { Component, useState } from "react";
import ClientNavigation from "../components/ClientNavigation";
import { Table, Tag, Space, message } from "antd";
import http from "../helper/AxiosConfig";
import reqwest from "reqwest";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,

    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
    render: (name) => `${name} +22 `,
    width: "20%",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    sorter: true,
    width: "20%",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: true,
    key: "email",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});
class Messages extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ObjectList: [],
    pagination: {
      current: 0,
      pageSize: 20,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.axiosGet({ pagination });
  }

  axiosGet = async (params = {}) => {
    console.log(params);
    await http
      .get("/contact" + "?page=" + getRandomuserParams)
      .then((response) => {
        let i = response.data;

        console.log(i.Contact.total);
        this.setState({ loading: true });
        this.setState({
          loading: false,
          ObjectList: i.Contact.data,
          pagination: {
            ...params.pagination,
            total: i.Contact.total,
          },
        });
      })
      .catch((e) => {
        console.log(e);
        if (e.response) {
          message.success(e.response, 2); // (message, delay)
        }
      });
  };

  handleTableChange = (pagination, filters, sorter) => {
    this.axiosGet({
      pagination,
      ...filters,
    });
  };

  // fetch = (params = {}) => {
  //   this.setState({ loading: true });
  //   reqwest({
  //     url: "https://randomuser.me/api",
  //     method: "get",
  //     type: "json",
  //     data: getRandomuserParams(params),
  //   }).then((data) => {
  //     console.log(data);
  //     this.setState({
  //       loading: false,
  //       data: data.results,
  //       pagination: {
  //         ...params.pagination,
  //         total: 200,
  //         // 200 is mock data, you should read it from server
  //         // total: data.totalCount,
  //       },
  //     });
  //   });
  // };

  render() {
    // const { data, pagination, loading } = this.state;
    const { ObjectList, loading } = this.state;
    return (
      <>
        <ClientNavigation />
        <Table
          columns={columns}
          dataSource={ObjectList}
          loading={loading}
          size="small"
          onChange={this.handleTableChange}
        />
        {/*
        <Table
          columns={columns}
          rowKey={(record) => record.login.uuid}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
        */}
      </>
    );
  }
}

export default Messages;
