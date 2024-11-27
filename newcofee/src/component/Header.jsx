import React from "react";
import "../font.ttf"
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';




function Header(){

  

  const swiper = new Swiper('.swiper10', {

    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    effect: "coverflow",
    fadeEffect: {
        crossFade: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




    return (

     


        <div>
     <div className=" swiper10     swiper-container">
  <div className="swiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="overlay" />
        <img src="https://raeescoffee.com/wp-content/uploads/2024/10/lavasan-web-3.jpg" alt="Zip Bag" />
        <div className="slide-content">
        </div>
      </div>
      <div className="swiper-slide">
        <div className="overlay" />
        <img src="https://raeescoffee.com/wp-content/uploads/2024/10/zipbag3-web-1.jpg" alt="Gift Box" />
        <div className="slide-content">
        </div>
      </div>
      <div className="swiper-slide">
        <div className="overlay" />
        <img src="https://raeescoffee.com/wp-content/uploads/2024/10/giftbox-web.jpg" alt="Equipment" />
        <div className="slide-content">
        </div>
      </div>
    </div>
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
    <div className="swiper-pagination" />
  </div>
</div>

         
        </div>
    )
}

export default Header;