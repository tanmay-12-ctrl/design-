import React, { useEffect, useState } from 'react';
import './Banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardData = [
  { id: 1, title: "Post 1", img: "/zashion.png" },
  { id: 2, title: "Post 2", img: "/zashion.png" },
  { id: 3, title: "Post 3", img: "/zashion.png" },
  { id: 4, title: "Post 4", img: "/zashion.png" },
  { id: 5, title: "Post 5", img: "/zashion.png" },
];

function Banner() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const fadeValue = Math.max(1 - scrollPosition / 500, 0);
    console.log(fadeValue); // Check the fading value
    setOpacity(fadeValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="banner">
      <Slider {...settings} className="banner__slider">
        {cardData.map((item) => (
          <div className="banner__card" key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              className="banner__cardImage"
              style={{ opacity: opacity }} // Dynamically adjust opacity here
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
