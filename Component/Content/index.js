import React from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import "./style.css";
import CutomeCarousel from "../Carousel";
import FeatureSection from "../FeatureSection";
import DemoSection from "../DemoSection";
import ContactUs from "../ContactUs";

const { Content } = Layout;

function CustomContent() {
  return (
    <>
      <Content>
        <div className="container">
          <CutomeCarousel />
          <div className="featureSection">
          <FeatureSection />
          <DemoSection/>
          <ContactUs/>

          </div>
        </div>
      </Content>
    </>
  );
}

export default CustomContent;
