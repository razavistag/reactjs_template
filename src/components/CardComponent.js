import React, { Component } from "react";
import {  Row, Col, Card, Typography } from "antd";

class CardComponent extends Component {
 

  state = {
    msg: "",
  };

  componentDidMount() {
    // code ...
  }

  render() {
    return (
      <>
        <Row>
          <Col xl={24} lg={24} md={24} sm={24} xs={24} className="pa-4">
            <Typography.Title>
              <span
                style={{
                  color: "#9FDF80", 
                }}
              >
                It's easy to
              </span>
              <span> get started</span>
            </Typography.Title>
            <Typography.Text>Hit the road with us</Typography.Text>
          </Col>

          <Col xl={2} lg={8} md={8} sm={8} xs={24}></Col>
          <Col xl={6} lg={8} md={8} sm={8} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                title="01. Register Your Company"
                bordered={false}
                style={{ width: 350 }}
                hoverable
              >
                <p>
                  You can easily register your company by filling the details of
                  your company in the sign up page. It would take us only 24
                  hours to confirm your registration.
                </p>
              </Card>
            </div>
          </Col>
          <Col xl={1} lg={8} md={8} sm={8} xs={24}></Col>

          <Col xl={7} lg={8} md={8} sm={8} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                title="02. Get Your Bookings"
                bordered={false}
                style={{ width: 350 }}
                hoverable
              >
                <p>
                  We fill your dashboard with bookings. Choose your own rate and
                  fix your own price.
                </p>
              </Card>
            </div>
          </Col>

          <Col xl={7} lg={8} md={8} sm={8} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                title="03. Pay weekly"
                bordered={false}
                style={{ width: 350 }}
                hoverable
              >
                <p>
                  No high monthly subscription fees. Pay £5 weekly. Pay only if
                  you have at least one booking for the week.
                </p>
              </Card>
            </div>
          </Col>

          <Col xl={2} lg={8} md={8} sm={8} xs={24}></Col>
        </Row>
      </>
    );
  }
}

export default CardComponent;
