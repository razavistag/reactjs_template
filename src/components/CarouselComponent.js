import React, { Component } from "react";
import { Carousel, Image, Row, Col } from "antd";

class CarouselComponent extends Component {
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
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Carousel autoplay dotPosition="bottom">
              <div>
                <Image
                  height="600px"
                  width="100%"
                  src="https://media.bizj.us/view/img/11839608/gettyimages-1174993126*1600xx2121-1193-0-111.jpg"
                  preview={false} 
                />
              </div>
              <div>
                <Image
                  height="600px"
                  width="100%"
                  src="https://www.beltandroad.news/wp-content/uploads/2020/01/Black-Sea-scaled.jpg"
                  preview={false}
                />
              </div>
              <div>
                <Image
                  height="600px"
                  width="100%"
                  src="https://www.worldatlas.com/upload/63/1f/75/shutterstock-1051989149.jpg"
                  preview={false}
                />
              </div>
              <div>
                <Image
                  height="600px"
                  width="100%"
                  src="https://climate.nasa.gov/system/news_items/main_images/2990_9827327865_98e0f0dc2d_o.jpg"
                  preview={false}
                />
              </div>
            </Carousel>
          </Col>
        </Row>
      </>
    );
  }
}

export default CarouselComponent;
