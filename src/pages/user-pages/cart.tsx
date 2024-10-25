import CartTable from "@/components/user-components/CartTable.tsx";
import {Link} from "react-router-dom";

const Cart = ()=>{
    return (
        <div className={"bg-[#F2F4F6]"}>
            <div className={"inline-padding py-6"}>
                <div className={"bg-white p-4 md:p-24 vertical-spacing"}>
                    <h2 className={"text-3xl font-extrabold"}>Cart</h2>
                    <div className={"grid lg:grid-cols-12 gap-8 mt-8"}>
                        <div className={"lg:col-span-8"}>
                            <CartTable/>
                        </div>
                        <div className={"lg:col-span-4 w-full"}>
                            <div className={"border"}>
                                <div className={"border-b px-5 py-1 bg-[#F2F4F6]"}>
                                    <h3 className={"text-2xl font-extrabold"}>Cart Totals</h3>
                                </div>

                                <div className={"p-6 vertical-spacing"}>
                                    <div className={""}>
                                        <div
                                            className={"border-b grid grid-cols-2 py-4 text-sm font-light text-gray-8"}>
                                            <p>SubTotal</p>
                                            <p>127,000shs</p>
                                        </div>
                                        <div
                                            className={"border-b grid grid-cols-2 py-4 text-sm font-light text-gray-8"}>
                                            <p>SubTotal</p>
                                            <p>127,000shs</p>
                                        </div>
                                    </div>
                                    <Link to={"/"}
                                                className={"rounded-3xl mt-10 mx-auto w-fit px-6 py-2 bg-[rgba(210,210,210,.4)] hover:bg-green-5 hover:text-white duration-300 font-light text-gray-8"}>
                                    PROCEED TO CHECKOUT
                                </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Link
                        to={"/shop"}
                        className={"rounded-3xl bg-gray-200 hover:bg-green-5 hover:text-white duration-300 w-fit font-light px-6 py-3 text-center"}>RETURN TO SHOP</Link>
                </div>

            </div>
        </div>
    )
}

export default Cart