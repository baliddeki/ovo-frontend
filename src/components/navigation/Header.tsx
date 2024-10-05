import {CiSearch} from "react-icons/ci";

const Header = ()=>{
    return (
        <>
            <div className={"bg-white px-8 md:px-12 py-4 h-[6.3rem] flex items-center gap-4"}>
                <div className={"flex-1"}>
                    <form
                        onSubmit={e=>e.preventDefault()}
                        className={"rounded-xl border-[1px] px-6 border-gray-[#111111] flex gap-4 items-center justify-between max-w-[900px] w-full"}>
                        <input type={"search"} className={"w-full py-3 ring-0 bg-none border-none outline-none"}/>
                        <button type={"submit"} className={"border-none shadow-none"}>
                            <CiSearch className={"text-2xl"}/>
                        </button>
                    </form>
                </div>
                <div>
                    <p>Profile Image and notification</p>
                </div>
            </div>
        </>
    )
}

export default Header