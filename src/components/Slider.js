import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
const Slider = () => {
     const images = [
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/designs/SX_712x384_(CTA_=_LIVE.jpg",
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/brand-days/dec-5-oraimo/Slider.jpg",
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/brand-days/dec-5-oraimo/slider_FS_.jpg",
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/initiatives/xclusive-today-only/Slider_712x384.jpg",
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/userneeds/SX__712x384_copy_2.gif",
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/userneeds/SX__712x384.gif",
       "https://ng.jumia.is/cms/0-1-christmas-sale/2022/brands/defacto/Homepage_Slider.jpg",
     ];
    return (
      <Swiper
        modules={[Navigation, Pagination,  A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       
        onSwiper={(swiper) => console.log(swiper)}
        loop="true"
        onSlideChange={() => console.log("slide change")}
        >
            {images.map(image => {
              return(

                <SwiperSlide key={image} className="h-full "><img src={image} alt=""  className="h-96 w-full"/> </SwiperSlide>
              )
                
            })}
       
      </Swiper>
    );
};

export default Slider;
