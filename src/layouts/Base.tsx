import {Outlet} from "react-router-dom";
import Sidebar from "@/components/navigation/Sidebar.tsx";
import Header from "@/components/navigation/Header.tsx";

const Base = ()=>{
    return (
        <>
            <div className={"relative bg-blue-1"}>
                <Sidebar />
                <div className={"ml-[18rem] min-h-screen"}>
                    <Header />
                    <div className={"p-10"}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Base