import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Header4.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Header4 = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        style={{ backgroundColor: "#eee" }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="ratingSwipe">
          <div className="ratingContent">
            <h1 className="cardHead">Rating & Reviews</h1>
            <p style={{ fontWeight: "300", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              ipsa, dicta nemo ab molestiae alias soluta ex aspernatur pariatur
              reprehenderit possimus id voluptatum odio, et, similique ducimus!
              Minima ducimus voluptatum rem facere omnis voluptatem delectus id
              nesciunt voluptas quae aut explicabo quisquam, dolorum dolores,
              tempore fugit velit! Eaque, officiis expedita.
            </p>
            <h6 className="text-success">Mumbai Square</h6>
            <p>CousineIndia Food, Mumbai</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ratingSwipe">
          <div className="ratingContent">
            <h1 className="cardHead">Rating & Reviews</h1>
            <p style={{ fontWeight: "300", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              ipsa, dicta nemo ab molestiae alias soluta ex aspernatur pariatur
              reprehenderit possimus id voluptatum odio, et, similique ducimus!
              Minima ducimus voluptatum rem facere omnis voluptatem delectus id
              nesciunt voluptas quae aut explicabo quisquam, dolorum dolores,
              tempore fugit velit! Eaque, officiis expedita.
            </p>
            <h6 className="text-success">Spicy Corner</h6>
            <p>CousineIndia Food, Mumbai</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header4;
