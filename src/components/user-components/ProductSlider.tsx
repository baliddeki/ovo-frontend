import ProductCard from "@/components/user-components/ProductCard.tsx";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
const ProductSlider = ()=>{
    return (
        <>
            <Swiper
                loop={true}
                rewind={true}
                grid={{
                    rows: 1,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}

                autoplay={true}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default ProductSlider