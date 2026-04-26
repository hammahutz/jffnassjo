import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const pagination = {
  clickable: true,
};

const Carousel = (images) => {
  return (
    <div className="flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        slidesPerView={3}
        pagination={pagination}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        className="flex"
        loop="true">
        {images.images.map((image, id) => (
          <SwiperSlide key={id}>
            <a href={image.src}>
              <img src={image.src} alt={image.alt} className="w-full h-auto"></img>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
