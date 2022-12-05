import React from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import logo from "../../Assets/logoipsum-280.svg";
import "./style.css";

const { Footer } = Layout;

function CustomFooter() {
  return (
    <>
      <Footer className="footerColor">
        <Row>
          <Col span={6}>
            <img src={logo} />
            <p className="footerText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
          <Col span={12}>
            <div className="links">
              <div className="verticalCenter">
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
              </div>
            </div>
          </Col>
          
        </Row>
      </Footer>
      <div className="footerColor">
        <div className="copyRightLine">&#169; Copyright 2022 Website.io</div>
      </div>
    </>
  );
}

export default CustomFooter;
