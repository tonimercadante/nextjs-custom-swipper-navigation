import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

import SwiperCore, { Navigation } from "swiper";
import { useRef } from "react";
SwiperCore.use([Navigation]);
function Carousel() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        loop
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          //@ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          //@ts-ignore

          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.mySwiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <div ref={navigationPrevRef} className={styles.prev}>
          {"<<<<<<<"}
        </div>
        <div ref={navigationNextRef} className={styles.next}>
          {">>>>>>>"}
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
