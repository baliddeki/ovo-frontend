import {useParams} from "react-router-dom"
import {orders} from "@/assets/data.ts";
import {ArrowLeft} from "lucide-react";
import Progress from "@/components/user-components/Progress.tsx";
// import Progress from "@/pages/user-pages/progress.tsx";

const UserOrderDetails = ()=>{
    const {orderId} = useParams()
    const order= orders.find(order => order.id === orderId)
    return (
        <>
            <div className={"md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white w-full p-6 md:p-12 mx-auto mt-16 vertical-spacing"}>
                    <div className={"border"}>
                        <div className={"flex items-center gap-4 p-4 border-b"}>
                            <ArrowLeft />
                            <h3>Order Details</h3>
                        </div>
                        <div className={"p-4"}>
                            <div className={"bg-green-2 border border-green-5 py-6 px-4 flex items-center gap-4 flex-wrap justify-between"}>
                                <div className={"vertical-spacing"}>
                                    <h3 className={"text-gray-8 md:text-2xl text-lg font-medium"}>#{order?.id}</h3>
                                    <p>
                                        4 Products {" . "}
                                        <span>Order Placed on: {order?.deliveryDate} at 12:00pm</span>

                                    </p>
                                </div>
                                <h3 className={"text-blue-5 md:text-3xl text-2xl font-bold"}>{order?.price}</h3>

                            </div>

                            <Progress steps={2}/>

                            yes

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserOrderDetails