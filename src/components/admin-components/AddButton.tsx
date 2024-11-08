import {LuPlus} from "react-icons/lu";
import {Link} from "react-router-dom";

const AddButton = ({link='/', title}: {link?: string, title:string})=>{
    return (
        <Link to={link}
              className={" min-w-[9rem] border-[1px] border-primary text-primary flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:border-primary duration-300"}>
            <LuPlus/>{title}
        </Link>
    )
}


export default AddButton