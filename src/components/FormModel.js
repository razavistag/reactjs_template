import React, { Component } from "react";
import http from "../helper/AxiosConfig";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Input,
  Space,
  notification,
} from "antd";
import { PlusOutlined, SendOutlined } from "@ant-design/icons";

class FormModel extends Component {
  contactFormRef = React.createRef();
  constructor(props) {
    super(props);
  }

  state = {
    isModalVisible: false,
    submitLoading: false,
    editItem: {},
  };

  componentDidMount() {}
  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
    this.close();
  };

  close = () => {
    this.contactFormRef.current.resetFields();
    this.props.refreshFunction();
    this.setState({
      submitLoading: false,
      isModalVisible: false,
      editItem: {},
    });
    console.log("model closed");
  };

  axiosPost = async (url, e) => {
    this.setState({ submitLoading: true });
    await http
      .post(url, e)
      .then((response) => {
        let i = response.data;
        console.log(i);
        notification["success"]({
          message: "Thank you " + `${e.name}`,
          description: `${i.message}`,
        });
        this.close();
      })
      .catch((e) => {
        console.log(e);
        if (e.response) {
          notification["success"]({
            message: "",
            description: `${e.response}`,
          });
        }
      });
  };

  onEditedItem = (e) => {
    console.log("on edited", this.contactFormRef);
    // this.contactFormRef.current.setFieldsValue({
    //   name: "110",
    // });

    // Form.setFieldsValue({
    //   name: "user test value",
    //   phone: 23434,
    // });
    // let [form] = Form.useForm();
    // this.setState({
    //   editItem: e,
    //   isModalVisible: true,
    // });
  };

  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
      let Data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      this.axiosPost("/contact", Data);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const { name } = this.state.editItem;
    console.log(name);

    return (
      <>
        <Button type="primary" size="small" onClick={this.showModal}>
          <PlusOutlined /> Add New Item
        </Button>
        <Modal
          title="CONTACT FORM"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
          centered={false}
          style={{ top: 90 }}
          mask={true}
          maskClosable={false}
          footer={[
            <Space align="baseline" key="0">
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>

              <Button
                type="primary"
                loading={this.state.submitLoading}
                form="myForm"
                key="submit"
                htmlType="submit"
              >
                <SendOutlined /> SEND
              </Button>
            </Space>,
          ]}
        >
          {name}
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            ref={this.contactFormRef}
            id="myForm"
          >
            <Row>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={24}
                style={{ background: "" }}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={24}
                style={{ background: "" }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your Email" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={24}
                style={{ background: "" }}
              >
                <Form.Item
                  label="Telephone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter your Telephone" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{ background: "" }}
              >
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your Message" },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </>
    );
  }
}

export default FormModel;
