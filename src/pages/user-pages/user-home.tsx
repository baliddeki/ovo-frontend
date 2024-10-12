import {FaArrowRight} from "react-icons/fa6";
import {Link} from "react-router-dom";

import ProductCard from "@/components/user-components/ProductCard.tsx";
import {FaCircle, FaRegCircle} from "react-icons/fa";
import shoes from "/images/sports-shoe4.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Services from "@/components/user-components/Services.tsx";

const UserHome = ()=>{
    return (
        <>
            <div>
                {/*hero section*/}
                <div className={"sm:h-[calc(100vh-6.25rem)] w-screen section md:px-20 lg:px-60 flex flex-col"}>
                    <div className={"p-4 mt-16"}>
                        <h2 className={"text-5xl sm:text-7xl lg:text-9xl w-fit font-extrabold mx-auto"}>AIR PRO X3</h2>
                        <img src={shoes} alt={"Boots"} className={"mx-auto block w-auto max-h-[50rem] h-full"}/>
                    </div>
                    <Link to={"shop"}
                          className={"rounded-3xl bg-white shadow-lg text-gray-8 px-6 py-3 w-fit mt-auto mx-auto font-light flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300"}>
                        <FaArrowRight/>
                        SHOP COLLECTION
                    </Link>
                </div>
                {/*Products section*/}
                <div className={"w-screen section md:px-20 lg:px-60 pt-8 my-16"}>
                    <div className={"p-4 mt-16"}>
                        <h2 className={"text-5xl sm:text-7xl lg:text-9xl w-fit font-extrabold mx-auto capitalize italic"}>UNBELIEVABLE</h2>
                        <p className={"text-2xl sm:text-3xl lg:text-4xl font-extrabold w-fit mx-auto italic capitalize mt-8"}>SPEED.COMFORT.</p>
                    </div>
                    <div className={"w-full mt-20"}>
                        <div className={"flex gap-4 items-center overflow-x-scroll w-full "}>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                        <div className={"mt-8 w-fit mx-auto flex items-center gap-2 mb-10"}>
                            <FaRegCircle className={"cursor-pointer text-sm text-green-5 hover:text-green-5"}/>
                            <FaRegCircle className={"cursor-pointer text-sm text-green-5 hover:text-green-5"}/>
                            <FaRegCircle className={"cursor-pointer text-sm text-green-5 hover:text-green-5"}/>
                            <FaCircle className={"cursor-pointer text-sm text-green-5 hover:text-green-5"}/>
                        </div>
                    </div>
                </div>
                <div className={"w-screen section md:px-20 lg:px-60 pt-8 my-16 bg-[#F2F4F6]"}>
                    <div className={"py-16 grid md:grid-cols-2 md:gap-6 lg:gap-12"}>
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem>
                                    <img src={shoes} alt={"Item Name"}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={shoes} alt={"Item Name"}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={shoes} alt={"Item Name"}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={shoes} alt={"Item Name"}/>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <div className={"w-full vertical-spacing gap-6 p-4"}>
                            <h3 className={"text-2xl font-extrabold"}>Limited Stock Available</h3>
                            <h2 className={"text-6xl font-extrabold"}>AirPro X2</h2>
                            <p className={"text-justify"}>Consectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <Link to={"shop"}
                                  className={"rounded-3xl bg-white shadow-lg text-gray-8 px-6 py-3 w-fit mt-auto font-light flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300"}>
                                <FaArrowRight/>
                                SHOP NOW
                            </Link>
                        </div>
                    </div>

                    <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-10 mb-10"}>
                      <Services number={"01"} title={"Research"}/>
                      <Services number={"02"} title={"Idea & Concept"}/>
                      <Services number={"03"} title={"Design & Production"}/>
                      <Services number={"04"} title={"Sales & Support"}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserHome
