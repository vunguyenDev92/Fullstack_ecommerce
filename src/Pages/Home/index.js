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
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import { IoMailOutline } from "react-icons/io5";



const Home = () => {


    return (

        <>
            <HomeBanner />

            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} className="cursor w-100" />
                                </div>

                                <div className="banner mt-4">
                                    <img src={banner1} className="cursor w-100" />
                                </div>
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

                            <div className="product_row productRow2 w-100 mt-4 d-flex justify-content-between">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />

                            </div>

                            <div className='d-flex align-items-center mt-5 mb-5 bannerSec'>
                                <img src={banner4} className="cursor w-100" />
                                <img src={banner5} className="cursor w-100" />
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-5 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h4 className="text-white">Join our newsletter and get...</h4>
                            <p className="text-lights">Join our email subscription now to get updates on <br /> promotions and
                                coupons.</p>

                            <form>
                                <IoMailOutline />

                                <input type="text" placeholder="Your email address..." />
                                <button >Subscribe</button>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}

export default Home;