import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

//IMG
import img1 from '../../assets/images/kspi-img1.jpg'
import img2 from '../../assets/images/kspi-img1.jpg'
import img3 from '../../assets/images/kspi-img1.jpg'

const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper w-[100%] h-[100vh]"
            >
                <SwiperSlide><img className='block w-[100%] h-[100%] object-cover' src={img1} alt="Institut rasmi" /></SwiperSlide>
                <SwiperSlide><img className='block w-[100%] h-[100%] object-cover' src={img2} alt="Institut rasmi" /></SwiperSlide>
                <SwiperSlide><img className='block w-[100%] h-[100%] object-cover' src={img3} alt="Institut rasmi" /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;
