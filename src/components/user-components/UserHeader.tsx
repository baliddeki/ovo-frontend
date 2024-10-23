import logo from "/full-logo.png"
import {Link} from "react-router-dom";
import {useActiveNav} from "@/assets/utils.tsx";
import Cart from "@/components/user-components/Cart.tsx";
import {IoMdMenu} from "react-icons/io";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const UserHeader = ()=>{
    const {smallScreenNav, handleSmallScreenNav, activeBar, handleActiveBar, path} = useActiveNav();

    console.log(path)
    return (
        <>
            <nav className={"flex items-center gap-4 section bg-white z-50"}>
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
                    {/* Navigation menu item */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger onClick={()=>handleActiveBar("my-account")}>My Account</NavigationMenuTrigger>
                                <NavigationMenuContent className={"w-full bg-white shadow-md"}>
                                    <div className={' w-[14rem] flex flex-col'}>
                                        <NavigationMenuLink onClick={()=>handleActiveBar("my-account")} asChild>
                                            <Link to="/orders" className={`${activeBar === "my-account" || path === "/my-account" ? "bg-green-2 text-green-5 ": "text-gray-8"} hover:text-green-5 px-5 py-3 duration-300 border-b`}>
                                                Orders
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink onClick={()=>handleActiveBar("my-account")} asChild>
                                            <Link to="/my-account" className={`${activeBar === "my-account" || path === "/my-account" ? "bg-green-2 text-green-5 ": "text-gray-8"} hover:text-green-5 px-5 py-3 duration-300`}>
                                                Account Details
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* end of navigation menu item */}

                <Link
                    onClick={() => handleActiveBar("about")}
                    to={"/about"}
                    className={`${activeBar === "about" || path === "/about" ? "bg-green-2 text-green-5 " : "text-gray-8"} hover:text-green-5 hover:bg-green-2 px-4 py-1 rounded-lg duration-300`}
                >
                    About
                </Link>

                <Link
                    onClick={() => handleActiveBar("contact")}
                    to={"/contact"}
                    className={`${activeBar === "contact" || path === "/contact" ? "bg-green-2 text-green-5 " : "text-gray-8"} hover:text-green-5 hover:bg-green-2 px-4 py-1 rounded-lg duration-300`}
                >
                    Contact
                </Link>
                <Cart/>
            </div>
        </nav>
    <div className={`md:hidden ${smallScreenNav ? "max-h-[24rem]" : "max-h-0 overflow-hidden"} duration-300`}>
        <div className={"py-6 vertical-spacing inline-padding bg-[#F2F4F6] "}>
            <Link onClick={() => handleActiveBar("")}
                  to={"/"}
                  className={`${activeBar === "" && path === "/" ? "text-green-5 " : "text-blue-5"} hover:text-green-5  duration-300`}>
                        Home
                    </Link>
                    <Link onClick={()=>handleActiveBar("shop")}
                          to={"/shop"}
                          className={`${activeBar === "shop" || path === "/shop" ? "text-green-5 ": "text-blue-5"} hover:text-green-5  duration-300`}>
                        Shop
                    </Link>

                    <ul className={"group"}>
                        <li onClick={()=>handleActiveBar("my-account")} >
                            <Link
                                to={'/account-details'}
                                className={`${activeBar === "my-account" || path === "/my-account" ? "text-green-5 " : "text-blue-5"} hover:text-green-5 `}
                            >
                                My Account
                            </Link>

                        </li>
                        <ul className={"max-h-0 overflow-hidden group-hover:max-h-[14rem] ml-4 duration-300"}>
                            <div className={'py-2 vertical-spacing gap-2'}>
                                <li onClick={() => handleActiveBar("my-account")}>
                                    <Link
                                        to={'/orders'}
                                        className={`${activeBar === "my-account" || path === "/my-account" ? "text-green-5 " : "text-blue-5"} hover:text-green-5 `}
                                    >
                                        Orders
                                    </Link>

                                </li>
                                <li onClick={() => handleActiveBar("my-account")}>
                                    <Link
                                        to={'/account-details'}
                                        className={`${activeBar === "my-account" || path === "/my-account" ? "text-green-5 " : "text-blue-5"} hover:text-green-5 `}
                                    >
                                        Account Details
                                    </Link>

                                </li>
                            </div>
                        </ul>
                    </ul>


            <Link onClick={() => handleActiveBar("about")}
                  to={"/about"}
                  className={`${activeBar === "about" || path === "/about" ? "text-green-5 " : "text-blue-5"} hover:text-green-5  duration-300`}>
                About
            </Link>
            <Link onClick={() => handleActiveBar("contact")}
                  to={"/contact"}
                  className={`${activeBar === "contact" || path === "/contact" ? "text-green-5 " : "text-blue-5"} hover:text-green-5  duration-300`}>
                Contact Us
            </Link>
        </div>
    </div>
        </>
    )
}


export default UserHeader