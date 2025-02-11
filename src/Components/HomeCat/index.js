import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {

    const [itemBg, setItemGb] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
    ]);

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-3 hd">Featured Categories </h3>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={10}
                    pagination={{ clickable: true }}
                    modules={[Navigation]}
                    className="mySwiper"
                    navigation={true}
                    slidesPerGroup={3}
                >
                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="item text-center" style={{ backgroundColor: item }}>
                                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png" />

                                        <h6>Red Apple</h6>
                                    </div>
                                </SwiperSlide>
                            )

                        })
                    }



                </Swiper>
            </div>
        </section>
    )


}

export default HomeCat;