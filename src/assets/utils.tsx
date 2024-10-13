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

export default usePasswordToggle;