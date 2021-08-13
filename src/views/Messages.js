import React, { Component } from "react";
import ClientNavigation from "../components/ClientNavigation";
import {
  Table,
  message,
  Row,
  Col,
  Space,
  Divider,
  Button,
  Menu,
  Checkbox,
  Dropdown,
  Popconfirm,
  notification,
} from "antd";
import http from "../helper/AxiosConfig";
import {
  EyeFilled,
  DeleteFilled,
  EditFilled,
  RedoOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import FormModel from "../components/FormModel";
class Messages extends Component {
  constructor(props) {
    super(props);
    this.FormModelChild = React.createRef();
  }
  state = {
    ObjectList: [],
    editItem: [],
    pagination: {
      current: 1,
      pageSize: 20,
    },
    loading: false,

    checkedColumns: [],
    displayTableColumnDropdown: false,
    columns: [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        width: "50px",
        fixed: "left",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "NAME",
        dataIndex: "name",
        key: "name",
        width: "200px",
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "PHONE",
        dataIndex: "phone",
        key: "phone",
        width: "200px",
        sorter: (a, b) => a.phone - b.phone,
      },
      {
        title: "EMAIL",
        dataIndex: "email",
        key: "email",
        width: "200px",
        sorter: (a, b) => a.email.length - b.email.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Action",
        key: "action",
        width: "60px",
        align: "right",
        fixed: "right",
        render: (text, record) => (
          <Space
            size="small"
            align="baseline"
            split={<Divider type="vertical" />}
          >
            <EyeFilled
              style={{ color: "#1890FF" }}
              onClick={() => {
                this.showObjectList(record);
              }}
            />

            <EditFilled
              style={{ color: "orange" }}
              onClick={() => {
                this.editObjectList(record);
              }}
            />

            <Popconfirm
              placement="leftTop"
              title={
                "Are you sure do you want to delete " +
                record.name +
                " message ? "
              }
              onConfirm={() => {
                this.confirmDelete(record);
              }}
              okText="Yes"
              cancelText="No"
            >
              <DeleteFilled
                style={{ color: "red" }}
                onClick={() => {
                  this.deleteObjectList(record);
                }}
              />
            </Popconfirm>
          </Space>
        ),
      },
    ],
    initialColumns: [],
  };

  componentDidMount() {
    this.setState({ initialColumns: this.state.columns });
    let { pagination } = this.state;
    this.axiosGet({ pagination });
  }

  axiosGet = async (params = {}) => {
    this.setState({ loading: true });

    await http
      .get("/contact" + "?page=" + params.pagination.current)
      .then((response) => {
        let i = response.data;
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
    });
    console.log("handleTableChange", pagination);
  };

  handleVisibleChange = (flag) => {
    this.setState({ displayTableColumnDropdown: flag });
  };

  displayTableColumn = (e) => {
    var checkedColumns = this.state.checkedColumns;
    if (e.target.checked) {
      checkedColumns = checkedColumns.filter((id) => {
        return id !== e.target.id;
      });
    } else if (!e.target.checked) {
      checkedColumns.push(e.target.id);
    }

    var filtered = this.state.initialColumns;
    for (var i = 0; i < checkedColumns.length; i++)
      filtered = filtered.filter((el) => {
        return el.dataIndex !== checkedColumns[i];
      });

    this.setState({ columns: filtered, checkedColumns: checkedColumns });
  };

  addNewItem = () => {
    console.log("addNewItem");
  };

  refresh = () => {
    console.log("refresh");
    let { pagination } = this.state;
    this.axiosGet({ pagination });
  };

  showObjectList = (e) => {
    console.log("viewObjectList", e);
  };

  editObjectList = async (e) => {
    console.log("editObjectList", e);

    await http
      .get("contact/" + e.id)
      .then((response) => {
        let i = response.data;
        this.state.editItem = i.result;
        // console.log("axios editObjectList", this.state.editItem);

        // this.FormModelChild.current.setState({ editItem: i.result });
        // this.FormModelChild.current.setState({ isModalVisible: true });
        this.FormModelChild.current.onEditedItem(i.result);
        // console.log("access child", this.FormModelChild.current.state);
      })
      .catch((e) => {
        console.log(e);
        if (e.response) {
          notification["error"]({
            message: "",
            description: `${e.response}`,
          });
        }
      });
  };

  deleteObjectList = (e) => {
    console.log("deleteObjectList", e);
  };

  confirmDelete = async (e) => {
    console.log("delete confirm", e);
    await http
      .delete("contact/" + e.id)
      .then((response) => {
        let i = response.data;
        console.log(i);
        notification["success"]({
          message: "" + `${e.name}`,
          description: `${i.message}`,
        });
        this.refresh();
      })
      .catch((e) => {
        console.log(e);
        if (e.response) {
          notification["error"]({
            message: "",
            description: `${e.response}`,
          });
        }
      });
  };

  render() {
    const { ObjectList, loading, pagination } = this.state;

    const menu = (
      <Menu>
        <Menu.ItemGroup title="Columns">
          <Menu.Item key="name">
            <Checkbox
              id="name"
              onChange={this.displayTableColumn}
              defaultChecked
            >
              Name
            </Checkbox>
          </Menu.Item>
          <Menu.Item key="phone">
            <Checkbox
              id="phone"
              onChange={this.displayTableColumn}
              defaultChecked
            >
              Phone
            </Checkbox>
          </Menu.Item>{" "}
          <Menu.Item key="email">
            <Checkbox
              id="email"
              onChange={this.displayTableColumn}
              defaultChecked
            >
              Email
            </Checkbox>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
    return (
      <>
        <ClientNavigation />
        <Row
          style={{
            marginTop: 40,
            marginLeft: 40,
            marginRight: 40,
            marginBottom: 20,
          }}
        >
          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            EXTRA ITEMS
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Space>
              <Button type="primary" size="small" onClick={this.refresh}>
                <RedoOutlined /> Reload
              </Button>
              <Dropdown
                overlay={menu}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.displayTableColumnDropdown}
              >
                <Button size="small">Show/Hide</Button>
              </Dropdown>
              <FormModel
                ref={this.FormModelChild}
                refreshFunction={this.refresh}
                editItem={this.state.editItem}
              />
            </Space>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Table
              columns={this.state.columns}
              dataSource={ObjectList}
              rowKey={(item) => item.id}
              loading={loading}
              pagination={pagination}
              size="small"
              sticky
              onChange={this.handleTableChange}
              scroll={{ x: 200, y: 600 }}
              bordered={true}
              title={() => "Header"}
              footer={() => "Footer"}
            ></Table>
          </Col>
        </Row>
      </>
    );
  }
}

export default Messages;
