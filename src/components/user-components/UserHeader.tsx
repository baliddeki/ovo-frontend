import logo from "/full-logo.png"
import {Link} from "react-router-dom";
import {useActiveNav} from "@/assets/utils.tsx";
import Cart from "@/components/user-components/Cart.tsx";
import {IoMdMenu} from "react-icons/io";
const UserHeader = ()=>{
    const {smallScreenNav, handleSmallScreenNav, activeBar, handleActiveBar, path} = useActiveNav();

    console.log(path)
    return (
        <>
            <nav className={"flex items-center gap-4 section"}>
                <Link to={"/"} className={"flex-1"}>
                    <img src={logo} alt={"Company Logo"}/>
                </Link>
                <button className={"md:hidden"} onClick={handleSmallScreenNav}>
                    <IoMdMenu className={"text-3xl"}/>
                </button>
                <div className={"hidden md:flex items-center gap-4"}>
                    <Link
                        onClick={()=>handleActiveBar("")}
                        to={"/"}
                        className={`${activeBar === "" && path === "/" ? "bg-green-2 text-green-5 ": "text-gray-8"} hover:bg-green-2 hover:text-green-5 px-4 py-1 rounded-lg duration-300`}
                    >
                        Home
                    </Link>
                    <Link
                        onClick={()=>handleActiveBar("shop")}
                        to={"/shop"}
                        className={`${activeBar === "shop" || path === "/shop" ? "bg-green-2 text-green-5 ": "text-gray-8"} hover:text-green-5 hover:bg-green-2 px-4 py-1 rounded-lg duration-300`}
                    >
                        Shop
                    </Link>

                    <Link
                        onClick={()=>handleActiveBar("about")}
                        to={"/about"}
                        className={`${activeBar === "about" || path === "/about" ? "bg-green-2 text-green-5 ": "text-gray-8"} hover:text-green-5 hover:bg-green-2 px-4 py-1 rounded-lg duration-300`}
                    >
                        About
                    </Link>

                    <Link
                        onClick={()=>handleActiveBar("contact")}
                        to={"/contact"}
                        className={`${activeBar === "contact" || path === "/contact" ? "bg-green-2 text-green-5 ": "text-gray-8"} hover:text-green-5 hover:bg-green-2 px-4 py-1 rounded-lg duration-300`}
                    >
                        Contact
                    </Link>
                    <Cart/>
                </div>
            </nav>
            <div className={`md:hidden ${smallScreenNav ? "inline-padding  bg-[#F2F4F6] vertical-spacing py-6 " : "-translate-x-full "} duration-300`}>
                <Link onClick={()=>handleActiveBar("")}
                      to={"/"}
                      className={`${activeBar === "" && path === "/" ? "text-green-5 ": "text-blue-5"} hover:text-green-5  duration-300`}>
                    Home
                </Link>
                <Link onClick={()=>handleActiveBar("shop")}
                      to={"/shop"}
                      className={`${activeBar === "shop" || path === "/shop" ? "text-green-5 ": "text-blue-5"} hover:text-green-5  duration-300`}>
                    Shop
                </Link>
                <Link onClick={()=>handleActiveBar("about")}
                      to={"/about"}
                      className={`${activeBar === "about" || path === "/about" ? "text-green-5 ": "text-blue-5"} hover:text-green-5  duration-300`}>
                    About
                </Link>
                <Link  onClick={()=>handleActiveBar("contact")}
                       to={"/contact"}
                       className={`${activeBar === "contact" || path === "/contact" ? "text-green-5 ": "text-blue-5"} hover:text-green-5  duration-300`}>
                    Contact Us
                </Link>
            </div>
        </>
    )
}


export default UserHeader