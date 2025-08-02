// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Sw() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='object-contain bg-no-repeat' src="https://uznews.uz/storage/uploads/68/12/68/file_6812681ba8573_orig.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-contain bg-no-repeat' src="https://www.tcmall.uz/_next/image?url=https%3A%2F%2Ftcmall.uz%2Fstrapi%2Fuploads%2Fct_4b1b8fed88.png&w=3840&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-contain bg-no-repeat' src="https://imageproxy.wolt.com/assets/680b2136d9c6260da97aaae3" alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-contain bg-no-repeat' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_2mU66Ewut6jPiQXtGZjhRG6Zsj3jOhlFZpKyaFlq65ogzywrsHL4yD7PCkQQ67etiE&usqp=CAU" alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-contain bg-no-repeat' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibVmsxXPXSijSwExlBioufFO1L_G2r8_cdg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-contain bg-no-repeat' src="https://uznews.uz/storage/uploads/68/0f/a8/file_680fa8bfb2dc2_orig.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
