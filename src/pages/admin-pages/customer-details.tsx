import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {useParams} from "react-router-dom";
import {customers} from "@/assets/data.ts";
import backgroundImage from "/background-images/user-details-bg.png"
import userImage from "/users/user-image-0.png"

const CustomerDetails = ()=>{
    const {customerId} = useParams()
    const customer = customers.find(customer => customer.id === customerId)
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>Edit {customer?.firstName + " " + customer?.lastName}</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/customers">Customers</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Customer details</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
            </div>

        {/*    Details */}
            <div className={"mt-8 mx-auto p-6 max-w-[35rem] w-full bg-white rounded-lg vertical-spacing"}>
                <div className={"relative rounded-lg w-full"}>
                    <img src={backgroundImage} alt={"Background image"} className={"rounded-lg block"}/>
                    <div className={"absolute -bottom-10 md:-bottom-20 w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full border-[.5rem] border-green-5 left-1/2 -translate-x-1/2"}>
                        <img src={userImage} alt={"User Image"} className={"block rounded-full w-full h-full"}/>
                    </div>
                </div>
                <div className={"vertical-spacing gap-1 w-fit mx-auto mt-8 md:mt-20"}>
                    <h2 className={"text-lg font-medium"}>Kato Smith</h2>
                    <p className={"text-sm text-light text-gray-8"}>User Details</p>
                </div>

            </div>
        </>
    )
}


export default CustomerDetails