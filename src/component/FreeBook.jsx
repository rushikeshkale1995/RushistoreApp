import React from 'react';
import Slider from "react-slick";
import list from "../list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';

function FreeBook() {

  const filterData = list.filter((data)=> data.category === 'Free');

 
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

 
  return (
       <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 text-white">
          <div>
          <h1 className="font-semibold text-xl pb-2">Free Offerred Course</h1>
             <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
            </p>
          </div>
          
       
        <div className="slider-container">
      <Slider {...settings}>
       {filterData.map((item) =>(
         <Card key={item.id} item={item} />
       ))}
      </Slider>
    </div>
    </div>
    


       </>
  )
}

export default FreeBook