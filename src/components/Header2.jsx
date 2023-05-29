import React, { useState } from "react";
import "./Header2.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const Header2 = () => {
  return (
    <div>
      <div className="header">
        <section className="instHeader row">
          <div className="instCards col-md-4">
            <div className="cardImg">
              <img
                src="/Assets/maps-and-flags.png"
                className="card-img-top "
                alt="Location"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter your location</h5>
              <p className="card-text fw-light fs-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quasi cumque eaque ab, fuga inventore quas
                distinctio, laborum voluptatum, veniam nobis tempore nisi vitae
                rem?
              </p>
            </div>
          </div>
          <div className="instCards col-md-4">
            <div className="cardImg">
              <img
                src="/Assets/food-tray.png"
                className="card-img-top "
                alt="Location"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter your location</h5>
              <p className="card-text fw-light fs-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quasi cumque eaque ab, fuga inventore quas
                distinctio, laborum voluptatum, veniam nobis tempore nisi vitae
                rem?
              </p>
            </div>
          </div>
          <div className="instCards col-md-4">
            <div className="cardImg">
              <img
                src="/Assets/cargo-truck.png"
                className="card-img-top "
                alt="Location"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter your location</h5>
              <p className="card-text fw-light fs-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quasi cumque eaque ab, fuga inventore quas
                distinctio, laborum voluptatum, veniam nobis tempore nisi vitae
                rem?
              </p>
            </div>
          </div>
        </section>
        <section className="chooseHeader row">
          <h1 className="mt-4 mb-4 fw-lighter">Choose your food</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            // slidesPerView={4}
            breakpoints={{
              1000: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food1.webp"
                className="card-img-top"
                alt="food1"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Mumbai square</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food2.webp"
                className="card-img-top"
                alt="food2"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Spicy Corner</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food3.jpeg"
                className="card-img-top"
                alt="food3"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Salt & Pepper</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food4.jpeg"
                className="card-img-top"
                alt="food4"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Food Point</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food1.webp"
                className="card-img-top"
                alt="food1"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Mumbai square</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food2.webp"
                className="card-img-top"
                alt="food2"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Spicy Corner</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food3.jpeg"
                className="card-img-top"
                alt="food3"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Salt & Pepper</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
            <SwiperSlide className="instCards">
              <img
                src="/Assets/food4.jpeg"
                className="card-img-top"
                alt="food4"
                height={300}
              />
              <h5 className="card-title fs-6 text-success">Food Point</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* <section className="chooseHeader row">
          <h1 className="mt-4 mb-4 fw-lighter">Choose your food</h1>
          <div className="instCards col-lg col-md-6">
            <div className="foodImg">
              <img src='/Assets/food1.webp' className="card-img-top" alt="Location" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-6 text-success">Mumbai square</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </div>
          </div>
          <div className="instCards col-lg col-md-6">
            <div className="foodImg">
              <img src='/Assets/food2.webp' className="card-img-top" alt="Location" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-6 text-success">Spicy Corner</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </div>
          </div>
          <div className="instCards col-lg col-md-6">
            <div className="foodImg">
              <img src='/Assets/food3.jpeg' className="card-img-top" alt="Location" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-6 text-success">Salt & Pepper</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </div>
          </div>
          <div className="instCards col-lg col-md-6">
            <div className="foodImg">
              <img src='/Assets/food4.jpeg' className="card-img-top" alt="Location" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-6 text-success">Food Point</h5>
              <p className="card-text fw-light fs-6 mt-1">Cuisine India Food</p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Header2;
