import React, { Component } from "react";
import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";

class ClientNavigation extends Component {
  state = {
    current: "1",
  };

  render() {
    const current = window.location.pathname;
    
    return (
      <>
        <Row
          style={{
            backgroundColor: "#001529",
          }}
        >
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={6}
            xs={20}
            style={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              padding: 10,
            }}
          >
            TITLE
          </Col>
          <Col xl={12} lg={12} md={12} sm={4} xs={4}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[current]}
              style={{ lineHeight: "40px" }}
              breakpoint="xs"
              collapsedWidth="0"
              onClick={this.handleClick}
            >
              <Menu.Item key="/">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/messages">
                <Link to="/messages">View Messages</Link>
              </Menu.Item>

              <Menu.Item key="10">nav 10</Menu.Item>
              <Menu.SubMenu
                key="setting:1-12"
                title={
                  <span className="submenu-title-wrapper">
                    Navigation Submenu
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                  <Menu.SubMenu
                    key="setting:1-123"
                    title={
                      <span className="submenu-title-wrapper">
                        Navigation Three - Submenu
                      </span>
                    }
                  >
                    <Menu.ItemGroup title="Item 1">
                      <Menu.Item key="setting:1-1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2-2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                      <Menu.Item key="setting:3-3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4-4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                  </Menu.SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3-0">Option 3</Menu.Item>
                  <Menu.Item key="setting:4-1">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>

              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item key="4">nav 4</Menu.Item>
              <Menu.Item key="5">nav 5</Menu.Item>
              <Menu.Item key="6">nav 6</Menu.Item>
              <Menu.Item key="7">nav 7</Menu.Item>
              <Menu.Item key="8">nav 8</Menu.Item>
              <Menu.Item key="9">nav 9</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </>
    );
  }
}

export default ClientNavigation;
