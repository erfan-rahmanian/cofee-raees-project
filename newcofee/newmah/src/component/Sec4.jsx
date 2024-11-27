
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './CoffeeShopSlider.css';
import { Pagination } from 'swiper/modules';

const products = [
  { id: 1, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'واشر و فیلتر موکاپات بیالتی سه و چهار نفره', price: '۴۵۵,۰۰۰ تومان' },
  { id: 2, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'باکس چوبی کلمبیا مدیوم', price: '۱,۱۳۶,۰۰۰ تومان' },
  { id: 3, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'باکس چوبی اسپرسو بلند', price: '۱,۱۱۲,۰۰۰ تومان' },
  { id: 4, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'کیف زنبیلی گونی بافت', price: '۴۰۰,۰۰۰ تومان' },
  { id: 5, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'فوم شیرساز دستی بیالتی مشکی ۶ کاپی', price: '۲,۰۶۶,۰۰۰ تومان' },
  { id: 5, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'فوم شیرساز دستی بیالتی مشکی ۶ کاپی', price: '۲,۰۶۶,۰۰۰ تومان' },
  { id: 5, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'فوم شیرساز دستی بیالتی مشکی ۶ کاپی', price: '۲,۰۶۶,۰۰۰ تومان' },
  { id: 5, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'فوم شیرساز دستی بیالتی مشکی ۶ کاپی', price: '۲,۰۶۶,۰۰۰ تومان' },
  { id: 5, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'فوم شیرساز دستی بیالتی مشکی ۶ کاپی', price: '۲,۰۶۶,۰۰۰ تومان' },
  { id: 5, img: 'https://raeescoffee.com/wp-content/uploads/2024/07/filter-3-4-cup-moka-express_-768x768.jpg', title: 'فوم شیرساز دستی بیالتی مشکی ۶ کاپی', price: '۲,۰۶۶,۰۰۰ تومان' },


];

function Sec4() {
  return (
    <div className="container my-5 ">
      <Swiper
        className="swiper222"
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={15}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          992: { slidesPerView: 5, spaceBetween: 15 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.img} alt={product.title} className="product-image" />
              <hr />
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price">{product.price}</div>
              <button className="add-to-cart">افزودن به سبد خرید</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sec4;
