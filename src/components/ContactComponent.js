import React, { Component } from "react";
import { Row, Col, Typography, Checkbox, Input, Form, Button } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
class ContactComponent extends Component {
  state = {
    msg: "",
    };
    
 
  componentDidMount() {
    // code ...
  }

  render() {
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Row
          style={{
            backgroundColor: "#F7F9FA",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          }}
          className="pa-3"
        >
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{ textAlign: "center" }}
          >
            <Typography.Title>
              <span style={{ color: "#92CB31" }}>Contact us </span>
              <span>anytime</span>
            </Typography.Title>
            <span>keep in touch with us MIT Consulting LLC</span>
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="Email"
                rules={[{ required: true, message: "Please enter your Email" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Telephone"
                name="Telephone"
                rules={[
                  { required: true, message: "Please enter your Telephone" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Message"
                name="Message"
                rules={[
                  { required: true, message: "Please enter your Message" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  SEND
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default ContactComponent;
