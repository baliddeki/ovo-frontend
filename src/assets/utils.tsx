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
export default usePasswordToggle;