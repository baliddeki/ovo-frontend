import {FaFacebook, FaInstagram, FaPhoneAlt} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import logo from "/full-logo.png"
import {Link} from "react-router-dom";
import {HiHome} from "react-icons/hi2";
import {TbMailFilled} from "react-icons/tb";
const UserFooter = ()=>{
    const copyRight = new Date().getFullYear();
    return (
        <footer
            className="mt-auto bg-neutral-100 text-center text-neutral-600 lg:text-left">
                <div
                    className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Social network icons container --> */}
                    <div className="flex justify-center">
                        <a className="mr-6 text-neutral-600">
                            <FaFacebook className={"text-lg hover:text-blue-5 hover:scale-125 duration-300"}/>
                        </a>
                        <a className="mr-6 text-neutral-600">
                           <FaXTwitter className={"text-lg hover:text-blue-5 hover:scale-125 duration-300"}/>
                        </a>

                        <a className="mr-6 text-neutral-600">
                           <FaInstagram className={"text-lg hover:text-blue-5 hover:scale-125 duration-300"}/>
                        </a>
                    </div>
                </div>

                {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- TW Elements section --> */}
                        <div className="">
                            <div
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <img src={logo} alt={"Company Logo"}/>
                            </div>
                            <p>
                                Here you can add some information about the company and any other business
                            </p>
                        </div>
                        {/* <!-- Products section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Products
                            </h6>
                            <p className="mb-4">
                                <a className="text-neutral-600"
                                >Men Shoes</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600"
                                >Lady's Shoes</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600"
                                >Children Shoes</a>
                            </p>
                        </div>
                        {/* <!-- Useful links section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Useful links
                            </h6>
                            <p className="mb-4 ">
                                <Link to={"/about"} className="text-neutral-600 hover:text-green-5 duration-300"
                                >About us</Link>
                            </p>
                            <p className="mb-4 ">
                                <Link to={"/contact"} className="text-neutral-600 hover:text-green-5 duration-300"
                                >Contact Us</Link>
                            </p>
                            <p className="mb-4 ">
                                <a className="text-neutral-600 hover:text-green-5 duration-300"
                                >Orders</a>
                            </p>
                            <p>
                                <a className="text-neutral-600 hover:text-green-5 duration-300"
                                >Help</a>
                            </p>
                        </div>
                        {/* <!-- Contact section --> */}
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                               <HiHome className={"text-lg"}/>
                                Kampala, Uganda
                            </p>
                            <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                               <TbMailFilled className={"text-lg"}/>
                                shoe-shop@gmail.com
                            </p>
                            <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                               <FaPhoneAlt className={"text-lg"}/>
                                + 256 777777777
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className="bg-neutral-200 p-6 text-center">
                    <span>© {copyRight} Copyright:</span>
                    <a
                        className="font-semibold text-neutral-600"

                    >Shoe Shop</a>
                </div>
            </footer>
    )
}

export default UserFooter