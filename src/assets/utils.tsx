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
    const [smallScreenNav, setSmallScreenNav] = useState(false);
    const [activeBar, setActiveBar] = useState<string | null>("");
    const location = useLocation();
    const path = location.pathname;
    const handleSmallScreenNav = ()=>{
        setSmallScreenNav(prev => !prev)
    }
    const handleActiveBar = (value: string)=>{
        setActiveBar(value)
        if(smallScreenNav) handleSmallScreenNav()
    }

    return {smallScreenNav, handleSmallScreenNav, activeBar, handleActiveBar, path}
}

export const gradientBackground = {
    background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
}


export const shadowBackground = {

    background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(94,94,94,0.21750707118785018) 27%, rgba(255,255,255,0) 100%)"
}


export const useProductCount = () => {
    const [productCounts, setProductCounts] = useState({});

    const handleProductCount = (productId: string,action:string) => {
        setProductCounts((prevCounts) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const currentCount:number = prevCounts[productId] || 0;
            const newCount = action === "add" ? currentCount + 1 : Math.max(currentCount - 1, 0);

            return {
                ...prevCounts,
                [productId]: newCount,
            };
        });
    };
    return { productCounts, handleProductCount };
};


export const extractNum = (value: string)=>{
    return (parseInt(value.replace(/\D/g, ''), 10))
}
export default usePasswordToggle;