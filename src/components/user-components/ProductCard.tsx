import {Rating} from "@smastrom/react-rating";
import {Link} from "react-router-dom";

interface Props{
    image: string;
    name: string;
    category: string;
    price: string;
    productId?: string;
}
const ProductCard = ({image, name, category, price, productId}:Props)=>{
    const gradientBackground = {
        background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
}
    return (
        <>
            <div className={"min-w-[18.75rem]"}>
                <Link to={`/product/${productId}`} reloadDocument style={gradientBackground} className={"w-full h-[17.5rem] bg-white flex items-center justify-center p-4"}>
                    <img src={image} alt={name} className={"block my-auto"}/>
                </Link>
                <div className={"bg-primary-50 p-4 py-10"}>
                    <div className={"vertical-spacing gap-2 w-fit mx-auto"}>
                        <p className={"text-sm"}>{category}</p>
                        <Link to={`/product/${productId}`} reloadDocument className={"font-bold "}>{name}</Link>
                        <div className={"flex gap-2 text-secondary items-center"}>
                            <Rating style={{ maxWidth: 100}} value={3} readOnly={true}/>
                        </div>
                        <p className={"text-sm text-primary"}>{price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard