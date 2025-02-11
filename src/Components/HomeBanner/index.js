import React from "react";
import Slider from "react-slick";
import homeBanner1 from "../../assets/images/homeBanner1.png";
import homerBanner2 from "../../assets/images/homeBanner2.png";
import homeBanner3 from "../../assets/images/homeBanner3.png";
const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        autoplay: true,
    };
    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={homeBanner1} className="w-100" />
                </div>
                <div className="item">
                    <img src={homerBanner2} className="w-100" />
                </div>
                <div className="item">
                    <img src={homeBanner3} className="w-100" />
                </div>

            </Slider>
        </div>
    )
}

export default HomeBanner;