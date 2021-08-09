import React, { Component } from "react";
import { Row, Col } from "antd";
class Footer extends Component {
  state = {
    msg: "",
  };

  componentDidMount() {
    // code ...
  }

  render() {
    return (
      <>
        <Row className="pa-1">
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{ textAlign: "start" }}
          >
            MIT Consulting LLC Copyright © 2021. All right reserved
          </Col>
        </Row>
      </>
    );
  }
}

export default Footer;
