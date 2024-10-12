import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";
import {products} from "@/assets/data.ts";
import Filter from "@/components/user-components/Filter.tsx";

const Shop = ()=>{
    const gradientBackground = {
        background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
    }

    return (
        <>
            <div className={"md:px-20 lg:px-60 bg-[#F2F4F6] py-16"}>
                <div className={"flex items-center justify-between mb-10"}>
                    <Filter/>
                    <div className={"flex items-center gap-4"}>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Default Setting" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default Setting</SelectItem>
                                <SelectItem value="popularity">Sort by Popularity</SelectItem>
                                <SelectItem value="latest">Sort by Latest</SelectItem>
                                <SelectItem value="rating">Sort by Rating</SelectItem>
                                <SelectItem value="lowest-to-highest">Sort by Price: Lowest to Highest</SelectItem>
                                <SelectItem value="highest-to-lowest">Sort by Price: Highest to Lowest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/*Products*/}
                <div className={"grid grid-cols-4 gap-4"}>
                    {
                        products.map(({id, image, name, category, price}) => (
                            <div key={id}>
                                <Link to={`/product/${id}`} className={"group w-full bg-white flex items-center justify-center p-4"}
                                     style={gradientBackground}>
                                    <img src={image} alt={"Product Name"} className={"group-hover:scale-105 duration-700"}/>
                                </Link>
                                <div className={"vertical-spacing gap-2 w-fit mx-auto py-6"}>
                                    <p className={"text-sm text-center"}>{category}</p>
                                    <Link to={`/product/${id}`} className={"font-extrabold text-lg block text-center"}>{name}</Link>
                                    <div className={"flex gap-2 items-center w-fit mx-auto"}>
                                        <AiFillStar className={"text-lg"}/>
                                        <AiFillStar className={"text-lg"}/>
                                        <AiOutlineStar className={"text-lg"}/>
                                        <AiOutlineStar className={"text-lg"}/>
                                        <AiOutlineStar className={"text-lg"}/>
                                    </div>
                                    <div className={"flex items-center gap-2 w-fit mx-auto"}>
                                        <p className={"text-sm line-through text-gray-8"}>$22.00</p>
                                        <p className={"text-sm"}>{price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Shop
