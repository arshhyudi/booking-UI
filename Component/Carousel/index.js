import React from "react";
import { Carousel, Col, Row } from "antd";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img5.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img5.jpg";

const contentStyle = {
  margin: 0,
  height: "300px",
  color: "#fff",
};
const CutomeCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const CarouselData = [
    {
      img: img1,
      heading: "Heading",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: img2,
      heading: "Heading",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: img3,
      heading: "Heading",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: img4,
      heading: "Heading",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <Carousel afterChange={onChange}>
      {CarouselData.map((item) => {
        return (
          <div>
            <div style={contentStyle}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  height: "inherit",
                }}
              >
                <Row>
                  <Col span={12} style={{margin:"50px"}}>
                    <h1>{item.heading}</h1>
                    <p>{item.content}</p>
                  </Col>
                  <Col span={12}></Col>
                </Row>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
export default CutomeCarousel;
