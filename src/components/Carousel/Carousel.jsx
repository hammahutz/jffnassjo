import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./Carousel.module.css";

const Carousel = (images) => {
  console.log(images);
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        className={styles.swiper}
        loop="true"
        >
        {images.images.map((image) => (
          <SwiperSlide>
            <img src={image.src} alt={image.alt}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
