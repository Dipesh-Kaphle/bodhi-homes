import { useState } from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        className="control arrowRight"
        src="../../images/icons/controlicon.svg"
        alt=""
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <img
            className="control arrowLeft"
            src="../../images/icons/controlicon.svg"
            alt=""
          />
        </div>
      )}
    </>
  );
}

const HomeCaraousel = ({
  housesList,
  houseCheck,
  activeHome,
  setCurrentHouse,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    draggable: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    nextArrow: <NextArrow />,
    beforeChange: (next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleHouse = (id, house, slug) => {
    // if (activeHome === id) {
    //   gsap.to(".activeImage", {
    //     scale: 1.2,
    //     duration: 1,
    //   });
    // } else {
    //   gsap.to(".activeImage", {
    //     scale: 1,
    //     duration: 1,
    //   });
    // }
    houseCheck(id, slug);
    setCurrentHouse(house);
  };

  return (
    <div className="homethumbnails mob-carousel">
      {housesList && (
        <Slider {...settings}>
          {housesList.map((house, index) => (
            <div key={index}>
              <div className="homethumbnail flex1">
                <div
                  className="image mob-imageflex"
                  onClick={() => {
                    handleHouse(index, house, house.slug);
                    fbq("trackCustom", `House ${index + 1}`);
                  }}
                >
                  <img
                    src={house.image}
                    className={
                      activeHome === index
                        ? "img-fluid activeImage"
                        : "img-fluid"
                    }
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div
                  className="name mob-namebox"
                  onClick={() => {
                    handleHouse(index, house, house.slug);
                    fbq("trackCustom", `House ${index + 1}`);
                  }}
                >
                  <div className="textwrapper mob-textwrapper">
                    <h5 className="title fwb mob-carouseltitle">
                      {house.title}
                    </h5>
                    <p className="text-muted f14 text-uppercase mob-facetitle">
                      {house.face}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default HomeCaraousel;
