import React from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import "./style.css";

function DemoSection() {
  return (
    <div className="demoSection">
      <Row>
        <Col span={12}>
            <h1 className="demoSectionHeading">Intrested? Book a Free Demo</h1>
        </Col>
        <Col span={12} className="demoSectionButton">
            <Button className="btn">Book a Free Demo</Button>
        </Col>
      </Row>
    </div>
  );
}

export default DemoSection;
