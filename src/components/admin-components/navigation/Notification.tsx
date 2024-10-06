import {FaRegBell} from "react-icons/fa6";

const Notification = ()=>{
    return (
        <div className={"relative rounded-full h-10 w-10 bg-notification center-items p-2"}>
            <FaRegBell className={"text-2xl text-black"}/>
            <p className={"absolute -top-1 -right-1 h-5 w-5 p-2 rounded-full bg-orange-5 center-items text-sm text-white font-light"}>2</p>
        </div>
    )
}


export default Notification;