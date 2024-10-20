import shoes from "/images/sports-shoe4.png"
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const ProductCard = ()=>{
    const gradientBackground = {
        background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
}
    return (
        <>
            <div className={"min-w-[18.75rem]"}>
                <div style={gradientBackground} className={"w-full h-[17.5rem] bg-white flex items-center justify-center p-4"}>
                    <img src={shoes} alt={"Product name"} className={"block my-auto"}/>
                </div>
                <div className={"bg-gray-200 p-4 py-10"}>
                    <div className={"vertical-spacing gap-2 w-fit mx-auto"}>
                        <p className={"text-sm"}>Running Shoes</p>
                        <h3 className={"font-bold "}>Air Pro X3</h3>
                        <div className={"flex gap-2 items-center"}>
                            <AiFillStar className={"text-lg"}/>
                            <AiFillStar className={"text-lg"}/>
                            <AiOutlineStar className={"text-lg"}/>
                            <AiOutlineStar className={"text-lg"}/>
                            <AiOutlineStar className={"text-lg"}/>
                        </div>
                        <p className={"text-sm text-green-5"}>$19.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard