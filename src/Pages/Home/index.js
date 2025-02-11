import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";


const Home = () => {


    return (

        <>
            <HomeBanner />

            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={banner1} className="cursor w-100" />
                            </div>

                            <div className="banner mt-4">
                                <img src={banner1} className="cursor w-100" />
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className='d-flex align-items-center'>
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-lights text-sml mb-0">Shop the best selling products</p>
                                </div>
                                <Button className="viewAllBtn ms-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={4}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    navigation={true}
                                >

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>



                                </Swiper>
                            </div>



                            <div className='d-flex align-items-center mt-5'>
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-lights text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ms-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={4}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    navigation={true}
                                >

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />

                                    </SwiperSlide>



                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;