import React from "react";
import { Button, Col, Form, Input, Layout, Menu, Row, Select } from "antd";
import "./style.css";
import Checkbox from "antd/es/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";
import contactUsimg from "../../Assets/contactus.jpg"

function ContactUs() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="contactUs">
      <h1 className="contactUsHEading">Contact Us</h1>
      <Row>
        <Col span={12}>
          <Form onFinish={onFinish} autoComplete="off">
            <label className="label">Full Name</label>
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your full name !",
                },
              ]}
            >
              <Input placeholder="Full Name*" />
            </Form.Item>
            <label className="label">Your Email Address</label>
            <Form.Item
              name="emailAddress"
              rules={[
                {
                  required: true,
                  message: "Please input your email address !",
                },
              ]}
            >
              <Input placeholder="Email Address*" />
            </Form.Item>

            <label className="label">Subject</label>
            <Form.Item
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Please input your subject !",
                },
              ]}
            >
              <Select placeholder="Request For Demo*">
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <label className="label">Message</label>
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your subject !",
                },
              ]}
            >
              <TextArea rows={4}  placeholder="Type Your Message Here"/>
            </Form.Item>

            <Form.Item>
              <Button className="formBtn" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
            <img className="contactUsImg" src={contactUsimg}/>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
