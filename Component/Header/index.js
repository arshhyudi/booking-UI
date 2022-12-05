import React from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import logo from "../../Assets/logoipsum-280.svg";
import "./style.css";

const { Header } = Layout;

function Head() {
  return (
    <Header className="headerBAckGroundcolor">
      <Row>
        <Col span={12}>
          {" "}
          <div>
            <img src={logo} />
          </div>
        </Col>
        <Col span={12} >
            <div className="menu">
                <Button className="homeButton">Home</Button>
                <Button className="loginButton">Login</Button>
                <Button className="demoButton">BOOK A FREE DEMO</Button>

            </div>
        </Col>
      </Row>
    </Header>
  );
}

export default Head;
