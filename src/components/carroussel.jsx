'use client';

import React from 'react';
import Slider from 'react-slick';
import RecommendTrack from '../app/recommendTrack';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    speed: 800,
    slidesToShow: 10,
    slidesToScroll: 9,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#3C3963]">
      <Slider {...settings}>
        {RecommendTrack.map((data) => (
          <div key={data.id} className="hover:bg-[#322f61]">
            <a
              href={data.link_url}
              className="flex justify-center flex-col items-center"
            >
              <img src={data.room_icon_url} alt="" className="w-[3rem]" />
              {/* <div className="text-[1.5rem] text-white px-6 flex justify-center items-center">
              {data.room_icon_url}
            </div> */}
              <p className="text-center text-white p-2">{data.name}</p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
