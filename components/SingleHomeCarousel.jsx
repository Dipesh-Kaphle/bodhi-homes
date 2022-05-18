import { useState } from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className="down control" src="../images/icons/down.svg" alt="" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className="up control" src="../images/icons/up.svg" alt="" />
    </div>
  );
}
const SingleHomeCarousel = ({ images }) => {
  const [activeState, setActiveState] = useState(images[0].image_title);
  const [activeUrl, setActiveUrl] = useState(images[0].image_path);

  var settings = {
    dots: false,
    draggable: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          draggable: true,
        },
      },
    ],
  };
  return (
    <div>
      <section className="homeexplore">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 d-flex align-items-center is360">
              <div className="text">
                <img
                  src="../images/icons/360view.svg"
                  alt=""
                  className="mr-2"
                />
                {activeState}
              </div>
              |
              <img
                src={activeUrl}
                alt=""
                className="img-fluid rounded bigimage mob-360view"
              />
            </div>
            <div className="col-sm-3">
              <div className="v-carousel">
                <div className="blur upblur"></div>
                <div className="blur downblur"></div>
                <Slider {...settings}>
                  {images.map((item) => (
                    <div
                      className="item hascaption"
                      key={item}
                      onClick={() => {
                        setActiveState(item.image_title);
                        setActiveUrl(item.image_path);
                      }}
                    >
                      <img
                        src={item.image_path}
                        alt=""
                        className="img-fluid rounded"
                      />
                      <div className="caption text-capitalize">
                        {item.image_title}
                      </div>
                    </div>
                  ))}
                </Slider>
                {/* <div className="up control">
                  <img src="../images/icons/up.svg" alt="" />
                </div>
                <div className="down control">
                  <img src="../images/icons/down.svg" alt="" />
                </div> */}
                {/* 
                <div className="item">
                  <img
                    src="../images/banner.png"
                    alt=""
                    className="img-fluid rounded"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleHomeCarousel;
