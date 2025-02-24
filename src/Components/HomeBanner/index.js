import React from "react";
import homeBanner1 from "../../assets/images/homeBanner1.png";
import homeBanner2 from "../../assets/images/homeBanner2.png";
import homeBanner3 from "../../assets/images/homeBanner3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const HomeBanner = () => {

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                    navigation={true}
                    autoplay={
                        {
                            delay: 2500,
                            disableOnInteraction: false
                        }
                    }
                    loop={false}
                    modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="item">
                            <img src={homeBanner1} className="w-100" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <img src={homeBanner2} className="w-100" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <img src={homeBanner3} className="w-100" />
                        </div>
                    </SwiperSlide>



                </Swiper>

            </div>
        </div>
    )
}

export default HomeBanner;