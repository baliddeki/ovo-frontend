// @ts-nocheck

import {products} from "@/assets/data.ts";
import {Link, useParams} from "react-router-dom";
import {gradientBackground, useProductCount} from "@/assets/utils.tsx";
import {Search} from "lucide-react";
import {useState} from "react";
import {IoAddOutline} from "react-icons/io5";
import {AiOutlineMinus} from "react-icons/ai";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Input} from "@/components/ui/input.tsx";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

const UserProduct = ()=>{
    const [activeTab, setActiveTab] = useState<string>("description");
    const {productId} = useParams()
    const [formData, setFormData] = useState({
        rating: 0,
        email: '',
        message: '',
        name: ''
    })
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    const {productCounts, handleProductCount} = useProductCount();
    const product = products.find(product => product.id === productId)
    const productCategory = product?.category;
    const productBrand = product?.brand;
    const productName = product?.name
    const relatedProducts = products.filter(
        (product) =>
            (product.category === productCategory || product.brand === productBrand) &&
            product.name !== productName
    )

    const handleReviewSubmitForm =(e: { preventDefault: () => void; })=>{
        e.preventDefault()
    }
    const handleActiveTab = (value: string)=>{
        setActiveTab(value)
    }
    const handleFormData = (e: { preventDefault: () => void; target: { name: string; value: string; }; })=>{
        e.preventDefault()
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRatingChanged = (newRating: number) => {
        setFormData((prevState) => ({
            ...prevState,
            rating: newRating
        }))
    };
    return (
        <>
            <div className={"inline-padding bg-[#F2F4F6] py-16"}>
                <div className={"bg-white p-4 md:p-24"}>
                    <div className={'grid lg:grid-cols-2 mb-8'}>
                        <div style={gradientBackground} className={"relative"}>
                            <div className={"w-full h-full overflow-hidden flex items-center justify-center group"}>
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="duration-500 ease-in-out transform group-hover:scale-150"
                                />
                            </div>

                            <Dialog>
                                    <DialogTrigger className={"bg-white rounded-full h-10 w-10 p-2 absolute top-4 right-4"}><Search/></DialogTrigger>
                                    <DialogContent>
                                        <div className={"bg-white max-w-[45rem] max-h-[45rem] h-full w-full"}>
                                            <img src={product?.image} alt={product?.name} className={'block w-full h-auto'}/>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                        </div>
                        <div className={"md:px-8 vertical-spacing"}>
                            <p className={"text-green-5 text-lg"}>{product?.category}</p>
                            <h2 className={"text-3xl font-extrabold"}>{product?.name}</h2>
                            <div className={"flex items-center gap-4"}>
                                <p className={"text-gray-8 text-2xl font-bold"}>{product?.price}</p>
                                <p>+ free shipping</p>
                            </div>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
                                auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
                                condimentum sit amet a augue. Sed non neque elit sed.</p>
                            <div className={"flex items-center gap-2 mb-8"}>
                                <button className={"py-1 px-3 border-[1px] hover:border-black duration-300"}>10</button>
                                <button className={"py-1 px-3 border-[1px] hover:border-black duration-300"}>7</button>
                                <button className={"py-1 px-3 border-[1px] hover:border-black duration-300"}>8</button>
                                <button className={"py-1 px-3 border-[1px] hover:border-black duration-300"}>9</button>
                            </div>
                            <div className={"border-y-[1px] py-4 flex items-center gap-4"}>
                                <div className={"grid grid-cols-3 items-center"}>
                                    <button onClick={() => handleProductCount(product?.id as string, "minus")}
                                            className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}><AiOutlineMinus/>
                                    </button>
                                    <button
                                        className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}>{productCounts[product?.id] || 0}</button>
                                    <button onClick={() => handleProductCount(product?.id as string, "add")}
                                            className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}><IoAddOutline/>
                                    </button>
                                </div>
                                <button
                                    className={"rounded-3xl px-10 py-1 text-sm bg-[rgba(210,210,210,.4)] hover:bg-green-5 hover:text-white font-light text-gray-8"}>ADD
                                    TO CART
                                </button>
                            </div>

                            <div className={"flex items-center gap-4 text-sm mb-8"}>
                                <p>SKU: <span className={"text-gray-8"}>NA</span></p>
                                <p className={"text-green-5"}>Category: <span
                                    className={"text-gray-8"}>{product?.category}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className={"border-t-[1px] w-full flex gap-4 flex-wrap mt-20"}>
                        <button onClick={() => handleActiveTab("description")}
                                className={`${activeTab === "description" ? "border-t-blue-5" : "border-t-transparent"} border-t-[3px] w-fit py-2`}>Description
                        </button>
                        <button onClick={() => handleActiveTab("additional-information")}
                                className={`${activeTab === "additional-information" ? "border-t-blue-5" : "border-t-transparent"} border-t-[3px] w-fit py-2`}>
                            Additional Information
                        </button>
                        <button
                            onClick={() => handleActiveTab("reviews")}
                            className={`${activeTab === "reviews" ? "border-t-blue-5 " : "border-t-transparent"} border-t-[3px] w-fit py-2`}>
                            Reviews(0)
                        </button>
                    </div>

                    {/*Tabs*/}
                    <div className={`${activeTab === "description" ? "mt-4" : "hidden"}`}>
                        <p className={"text-gray-8"}>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                            mauris vitae erat
                            consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                            felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
                    </div>

                    {/*second tab*/}
                    <div className={`${activeTab === "additional-information" ? "mt-4" : "hidden"}`}>
                        <div className={"grid grid-cols-12 text-sm text-gray-8"}>
                            <div className={"col-span-2 border-y border-s px-6 py-2"}>Size</div>
                            <div className={"col-span-10 border px-6 py-2"}>
                                <p>10, 9, 6, 8</p>
                            </div>
                        </div>
                    </div>
                    {/*third tab*/}
                    <div className={`${activeTab === "reviews" ? "mt-4" : "hidden"}`}>
                        <p>There are no Reviews yet</p>
                        <form onSubmit={handleReviewSubmitForm} className={"border p-4 mt-6 vertical-spacing"}>
                            <p className={"text-2xl text-gray-8"}>Be the first to review <span>“Air Pro X3 Green”</span>
                            </p>
                            <p className={"text-gray-8"}>Your email address will not be published. Required fields are
                                marked *</p>
                            <div className={"flex gap-2 items-center"}>
                                <p className={"text-gray-8"}>Your rating *</p>
                                <div>
                                    <Rating style={{ maxWidth: 150 }} value={formData.rating} onChange={handleRatingChanged} />
                                </div>
                            </div>
                            <label className={"text-gray-8"}>
                                Your Review *
                                <Textarea
                                    name={'message'}
                                    onChange={handleFormData}
                                    rows={5}></Textarea>
                            </label>
                            <div className={"grid gap-4 md:grid-cols-2"}>
                                <label className={"text-gray-8"}>
                                    Name *
                                    <Input
                                        name={'name'}
                                        onChange={handleFormData}
                                        type={"text"}/>
                                </label>
                                <label className={"text-gray-8"}>
                                    Email *
                                    <Input
                                        name={'email'}
                                        onChange={handleFormData}
                                        type={"email"}/>
                                </label>
                            </div>
                            <button
                                className={"rounded-3xl w-fit px-6 py-2 bg-[rgba(210,210,210,.4)] hover:bg-green-5 hover:text-white font-light text-gray-8"}>
                                SUBMIT
                            </button>
                        </form>


                    </div>
                    {/*Related Products*/}
                    <div>
                        <h3 className={"text-2xl md:text-6xl font-extrabold my-20"}>Related Products</h3>
                        {
                            relatedProducts.length === 0 ?
                                <p>There are currently no related products</p>
                                :
                                <div className={"grid grid-cols-4 gap-4"}>
                                    {

                                        relatedProducts.map(({id, image, name, category, price}) => (
                                            <div key={id}>
                                                <Link to={`/product/${id}`}
                                                      reloadDocument
                                                      className={"group w-full bg-white flex items-center justify-center p-4"}
                                                      style={gradientBackground}>
                                                    <img src={image} alt={"Product Name"}
                                                         className={"group-hover:scale-105 duration-700"}/>
                                                </Link>
                                                <div className={"vertical-spacing gap-2 w-fit mx-auto py-6"}>
                                                    <p className={"text-sm text-center"}>{category}</p>
                                                    <Link to={`/product/${id}`}
                                                          reloadDocument
                                                          className={"font-extrabold text-lg block text-center"}>{name}</Link>
                                                    <div className={"flex gap-2 items-center w-fit mx-auto"}>
                                                    {/*    */}
                                                        <Rating style={{ maxWidth: 100 }} value={3} readOnly={true}/>
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
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default UserProduct
