import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import satu from '../../img/slide1/1.webp';
import dua from '../../img/slide1/2.webp';
import tiga from '../../img/slide1/3.webp';
import empat from '../../img/slide1/4.webp';
import lima from '../../img/slide1/5.webp';
import enam from '../../img/slide1/6.webp';
import tujuh from '../../img/slide1/7.webp';
import delapan from '../../img/slide1/8.webp';
import sembilan from '../../img/slide1/9.webp';
import sepuluh from '../../img/slide1/10.webp';
import sebls from '../../img/slide1/11.webp';
import duabls from '../../img/slide1/12.webp';
import tigabls from '../../img/slide1/13.webp';
import empatbls from '../../img/slide1/14.webp';
import limabls from '../../img/slide1/15.webp';
import enambls from '../../img/slide1/16.webp';
import tujuhbls from '../../img/slide1/17.webp';
import delapanbls from '../../img/slide1/18.webp';
import sembilanbls from '../../img/slide1/19.webp';
import duapuluh from '../../img/slide1/20.webp';
import duaplhsatu from '../../img/slide1/21.webp';
import duaplhdua from '../../img/slide1/22.webp';
import duaplhtiga from '../../img/slide1/23.webp';

// import required modules
import { Navigation, } from "swiper";

export default function App() {
 return (
    <div className="mx-auto h-fit w-full">
     <Swiper 
      autoHeight={true}
      slidesPerGroupSkip={1}
      navigation={true} 
      pagination={{clickable: true,}}
      modules={[Navigation,]} 
      className="mySwiper">
        <SwiperSlide><img src={satu} alt='satu'></img></SwiperSlide>
        <SwiperSlide><img src={dua} alt='dua'></img></SwiperSlide>
        <SwiperSlide><img src={tiga} alt='tiga'></img></SwiperSlide>
        <SwiperSlide><img src={empat} alt='empat'></img></SwiperSlide>
        <SwiperSlide><img src={lima} alt='lima'></img></SwiperSlide>
        <SwiperSlide><img src={enam} alt='enam'></img></SwiperSlide>
        <SwiperSlide><img src={tujuh} alt='tujuh'></img></SwiperSlide>
        <SwiperSlide><img src={delapan} alt='delapan'></img></SwiperSlide>
        <SwiperSlide><img src={sembilan} alt='sembilan'></img></SwiperSlide>
        <SwiperSlide><img src={sepuluh} alt='sepuluh'></img></SwiperSlide>
        <SwiperSlide><img src={sebls} alt='sebls'></img></SwiperSlide>
        <SwiperSlide><img src={duabls} alt='duabls'></img></SwiperSlide>
        <SwiperSlide><img src={tigabls} alt='tigabls'></img></SwiperSlide>
        <SwiperSlide><img src={empatbls} alt='empatbls'></img></SwiperSlide>
        <SwiperSlide><img src={limabls} alt='limabls'></img></SwiperSlide>
        <SwiperSlide><img src={enambls} alt='enambls'></img></SwiperSlide>
        <SwiperSlide><img src={tujuhbls} alt='tujuhbls'></img></SwiperSlide>
        <SwiperSlide><img src={delapanbls} alt='delapanbls'></img></SwiperSlide>
        <SwiperSlide><img src={sembilanbls} alt='sembilanbls'></img></SwiperSlide>
        <SwiperSlide><img src={duapuluh} alt='duapuluh'></img></SwiperSlide>
        <SwiperSlide><img src={duaplhsatu} alt='duaplhsatu'></img></SwiperSlide>
        <SwiperSlide><img src={duaplhdua} alt='duaplhdua'></img></SwiperSlide>
        <SwiperSlide><img src={duaplhtiga} alt='duaplhtiga'></img></SwiperSlide>
      </Swiper>
    </div>
  );

 }