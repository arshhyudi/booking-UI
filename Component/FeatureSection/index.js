import React from "react";
import { Button, Card, Col, Layout, Menu, Row } from "antd";
import { FormOutlined } from "@ant-design/icons";
import "./style.css";

function FeatureSection() {
  const featureData = [
    {
      icon: <FormOutlined />,
      heading: "AI & ML POWERED",
      content: "ML driven real  global news checks",
    },
    {
      icon: <FormOutlined />,
      heading: "AI & ML POWERED",
      content: "ML driven real  global news checks",
    },
    {
      icon: <FormOutlined />,
      heading: "AI & ML POWERED",
      content: "ML driven real  global news checks",
    },
    {
      icon: <FormOutlined />,
      heading: "AI & ML POWERED",
      content: "ML driven real  global news checks",
    },
    {
      icon: <FormOutlined />,
      heading: "AI & ML POWERED",
      content: "ML driven real  global news checks",
    },
    {
      icon: <FormOutlined />,
      heading: "AI & ML POWERED",
      content: "ML driven real  global news checks",
    },
  ];
  return (
    <>
      <h1 className="features">Features</h1>
      <p className="featureText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Row>
        {featureData.map((item) => {
          return (
            <Col span={8}>
              <Card bordered={false} style={{ margin: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  {item.icon}
                  <h3 style={{ marginTop: "10px" }}>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default FeatureSection;
