import ProductCard from "@/components/user-components/ProductCard.tsx";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import {products} from "@/assets/data.ts";
const ProductSlider = ()=>{
    return (
        <>
        <Swiper
            loop={true}
            rewind={true}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4
                },
            }}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            {
                products.slice(0, 10).map(({id, name, image, category, price}) => (
                    <SwiperSlide key={id}>
                        <ProductCard category={category} name={name} image={image} price={price}/>
                    </SwiperSlide>
                ))
            }

</Swiper>
</>
)
}

export default ProductSlider