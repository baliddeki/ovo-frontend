import {useState} from "react";
import {useLocation} from "react-router-dom";

const usePasswordToggle = ()=>{
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = ()=>{
        setShowPassword(prev => !prev);
    }
    return {showPassword, handleShowPassword}
}
export const useActiveNav = ()=>{
    const [activeBar, setActiveBar] = useState<string | null>("");
    const location = useLocation();
    const path = location.pathname;

    const handleActiveBar = (value: string)=>{
        setActiveBar(value)
    }

    return {activeBar, handleActiveBar, path}
}

export const gradientBackground = {
    background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
}


export const shadowBackground = {

    background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(94,94,94,0.21750707118785018) 27%, rgba(255,255,255,0) 100%)"
}
export default usePasswordToggle;