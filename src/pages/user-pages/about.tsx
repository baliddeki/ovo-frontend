import backgroundImage from "/images/bg-shoes-image.jpg"
import speed from "/images/speed.jpg"
import quality from "/images/quality.jpg"
import comfort from "/images/comfort.jpg"
import Services from "@/components/user-components/Services.tsx";
import {shadowBackground} from "@/assets/utils.tsx";
const About = ()=>{
    return (
        <>
            <div>
                <div className={"inline-padding lg:mt-20 sm:mt-16 mt-6"}>
                    <h2 className={"text-5xl text-center md:text-left md:text-9xl text-[rgba(210,210,210,.7)] font-extrabold"}>Know Us More</h2>
                    <h3 className={"text-gray-8 text-center md:text-left text-3xl md:text-7xl font-extrabold"}>About Us</h3>
                </div>
                <div className={"bg-[#F2F4F6] inline-padding mt-24 pb-24"}>
                    <div className={"relative rounded-lg w-full"}>
                        <img className={"block rounded-lg max-h-[33.5rem] w-full object-cover"} src={backgroundImage}
                             alt={"Background Image"}/>
                        <div className={"absolute top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"}>
                            <div className={"mt-auto"}>
                                <p className={"text-white sm:text-6xl text-2xl font-extrabold"}>Helping Your Keep Fit</p>
                                <p className={"text-white sm:text-4xl text-lg font-extrabold"}>Since 2016</p>
                            </div>
                        </div>
                    </div>
                    <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-10 mt-24"}>
                        <Services number={"01"} title={"Research"}/>
                        <Services number={"02"} title={"Idea & Concept"}/>
                        <Services number={"03"} title={"Design & Production"}/>
                        <Services number={"04"} title={"Sales & Support"}/>
                    </div>
                </div>
                <div className={"grid md:grid-cols-3"}>
                    <div className={"relative max-h-[46rem] h-full"}>
                        <img className={"block w-full h-full object-cover"} src={speed}
                             alt={"Background Image"}/>
                        <div style={shadowBackground} className={"absolute bg-bottom-shadow top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"}>
                            <div className={"mt-auto"}>
                                <p className={"text-white text-5xl lg:text-6xl font-extrabold w-fit mx-auto"}>Speed</p>
                            </div>
                        </div>
                    </div>
                    <div className={"relative max-h-[46rem] h-full"}>
                        <img className={"block w-full h-full object-cover"} src={quality}
                             alt={"Background Image"}/>
                        <div style={shadowBackground} className={"absolute bg-bottom-shadow top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"}>
                            <div className={"mt-auto"}>
                                <p className={"text-white text-5xl lg:text-6xl font-extrabold w-fit mx-auto"}>Quality</p>
                            </div>
                        </div>
                    </div>
                    <div className={"relative max-h-[46rem] h-full"}>
                        <img className={"block w-full h-full object-cover"} src={comfort}
                             alt={"Background Image"}/>
                        <div style={shadowBackground} className={"absolute bg-bottom-shadow top-0 left-0 w-full h-full flex flex-col p-8 md:px-14 md:py-24"}>
                            <div className={"mt-auto"}>
                                <p className={"text-white text-5xl lg:text-6xl font-extrabold w-fit mx-auto"}>Comfort</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
