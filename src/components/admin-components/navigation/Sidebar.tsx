import {Link, useLocation} from "react-router-dom";
import logo from "/full-logo.png"
import {useState} from "react";
import { LuArrowLeftFromLine } from "react-icons/lu";

type Props = {
    handleToggleSidebar: ()=> void;
    toggleSidebar: boolean;
}
const Sidebar = ({toggleSidebar, handleToggleSidebar}: Props)=>{
    const [activeBar, setActiveBar] = useState<string | null>("");
    const location = useLocation();
    const path = location.pathname;

    const handleActiveBar = (value: string)=>{
        setActiveBar(value)
    }
    return (
        <>
            <div className={`${toggleSidebar ? "" :"-translate-x-full"} z-50 duration-300 bg-white shadow-lg fixed max-h-screen h-full left-0 top-0 flex flex-col`}>
                <div className={"border-b-2 border-b-hr px-8 py-4 relative"}>
                    <Link to={"/admin"}>
                        <img src={logo} alt={"Logo Image"}/>
                    </Link>
                    <button onClick={handleToggleSidebar} className={"absolute right-4 top-1/2 -translate-y-1/2"}>
                        <LuArrowLeftFromLine className={"text-3xl text-gray-3"} />
                    </button>
                </div>
                <div className={"px-8 py-4"}>
                    <div className={"mt-8 md:mt-12 flex flex-col gap-8 font-bold"}>
                        <div className={"flex flex-col gap-4"}>
                            <h3 className={"capitalize text-gray-3"}>Menu</h3>
                            <div className={"flex flex-col gap-2 ml-4"}>
                                <Link
                                    onClick={()=>handleActiveBar("")}
                                    to={"/admin"}
                                    className={`${activeBar === "" && path === "/admin" ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Dashboard</Link>
                                <Link
                                    onClick={()=>handleActiveBar("analytics")}
                                    to={"/admin/analytics"}
                                    className={`${activeBar === "analytics" || path.includes("analytics") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Analytics</Link>
                                <Link
                                    onClick={()=>handleActiveBar("sales")}
                                    to={"/admin/sales"}
                                      className={`${activeBar === "sales" || path.includes("sales") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Sales</Link>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <h3 className={"capitalize text-gray-3"}>Management</h3>
                            <div className={"flex flex-col gap-2 ml-4"}>
                                <Link
                                    onClick={()=>handleActiveBar("products")}
                                    to={"/admin/products"}
                                      className={`${activeBar === "products" || path.includes("products") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Products</Link>
                                <Link
                                    onClick={()=>handleActiveBar("customers")}
                                    to={"/admin/customers"}
                                      className={`${activeBar === "customers" || path.includes("customers") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Customers</Link>
                                <Link
                                    onClick={()=>handleActiveBar("orders")}
                                    to={"/admin/orders"}
                                      className={`${activeBar === "orders" || path.includes("orders") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Orders</Link>
                                <Link
                                    onClick={()=>handleActiveBar("reports")}
                                    to={"/admin/reports"}
                                      className={`${activeBar === "reports" || path.includes("reports") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Reports</Link>
                                <Link
                                    onClick={()=>handleActiveBar("profile")}
                                      to={"/admin/profile"}
                                      className={`${activeBar === "profile" || path.includes("profile") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Profile</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col gap-2 ml-4 w-full mt-auto font-bold px-8 py-4"}>
                    <Link
                        onClick={()=>handleActiveBar("settings")}
                        to={"/admin/settings"}
                          className={`${activeBar === "settings" || path.includes("settings") ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:bg-blue-1 over:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}>Settings</Link>
                    <form onSubmit={e => e.preventDefault()}>
                        <button type={"submit"}
                                className={"block text-start hover:bg-blue-1 text-gray-8 hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300"}>
                            Log Out
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Sidebar