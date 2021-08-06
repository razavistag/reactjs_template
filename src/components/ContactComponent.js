import React, { Component } from "react";
import {
  Row,
  Col,
  Typography,
  Checkbox,
  Input,
  Form,
  Button,
  Space,
} from "antd";
import { MailOutlined, SendOutlined } from "@ant-design/icons";
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

          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ marginTop: 40 }}
          >
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

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ float: "right" }}
                >
                  <SendOutlined /> SEND
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ paddingLeft: 40, marginTop: 40 }}
          >
            <Typography.Title level={3}>
              Contact MIT Consulting LLC.
            </Typography.Title>
            <Space direction="vertical">
              <Typography.Text>Edison , NJ USA</Typography.Text>
              <Typography.Text>United States.</Typography.Text>
              <Typography.Text>P: (732) 820-0662</Typography.Text>
            </Space>
            <br></br>
            <br></br>
            <Typography.Title level={5}>Mail for support</Typography.Title>
            <Typography.Text>
              <MailOutlined style={{ paddingRight: 10 }} />
              support@vistagconsult.com
            </Typography.Text>
            <br></br>
            <br></br>
            <Typography.Title level={5}>Mail for Informations</Typography.Title>
            <Typography.Text>
              <MailOutlined style={{ paddingRight: 10 }} />
              infor@vistagconsult.com
            </Typography.Text>
          </Col>
        </Row>
      </>
    );
  }
}

export default ContactComponent;
