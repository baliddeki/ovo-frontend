import {Outlet} from "react-router-dom";
import UserHeader from "@/components/user-components/UserHeader.tsx";

const UserLayout = ()=>{
    return (
        <>
            <div>
                <UserHeader/>
                <Outlet />
            </div>
        </>
    )
}

export default UserLayout
