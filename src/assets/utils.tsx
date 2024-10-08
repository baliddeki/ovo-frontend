import {useState} from "react";

const usePasswordToggle = ()=>{
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = ()=>{
        setShowPassword(prev => !prev);
    }
    return {showPassword, handleShowPassword}
}

export default usePasswordToggle;