import {CiSearch} from "react-icons/ci";
import Notification from "@/components/admin-components/navigation/Notification.tsx";
import {CgProfile} from "react-icons/cg";
import {LuArrowRightFromLine} from "react-icons/lu";

type Props = {
    handleToggleSidebar: ()=> void;
    toggleSidebar: boolean;
}
const Header = ({handleToggleSidebar, toggleSidebar}: Props)=>{
    return (
        <>
            <div className={"bg-white px-8 md:px-12 py-4 h-[6.3rem] flex items-center gap-4"}>
                {
                    toggleSidebar ? "":<button onClick={handleToggleSidebar}>
                        <LuArrowRightFromLine className={"text-3xl text-blue-5"} />
                    </button>
                }
                <div className={"flex-1"}>
                    <form
                        onSubmit={e => e.preventDefault()}
                        className={"rounded-xl border-[1px] px-6 flex gap-4 items-center justify-between max-w-[900px] w-full"}>
                        <input type={"search"} className={"w-full py-3 ring-0 bg-none border-none outline-none"}/>
                        <button type={"submit"} className={"border-none shadow-none"}>
                            <CiSearch className={"text-2xl"}/>
                        </button>
                    </form>
                </div>
                <div className={"hidden md:flex items-center gap-4 md:gap-6"}>
                    <div>
                        <Notification/>
                    </div>
                    <div className={"flex items-center gap-2"}>
                        <div className={"rounded-full bg-notification h-[3rem] w-[3rem] center-items"}>
                            <CgProfile className={"h-full w-full"}/>
                        </div>
                        <div>
                            <h2 className={"font-bold text-lg"}>Emmanuel</h2>
                            <p className={"text-[rgba(87,88,100,.70)] font-light"}>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header