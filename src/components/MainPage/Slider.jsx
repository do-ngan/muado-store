import React from "react";
import "./Slider.css";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <section>
        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <>
                <div className="box d_flex top" key={index}>
                  <div>
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <button className="btn-primary">Shop Now</button>
                  </div>
                  <div>
                    <img src={value.cover} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Home;
