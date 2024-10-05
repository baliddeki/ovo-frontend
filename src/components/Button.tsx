// import {Link} from "react-router-dom";
// import {Dispatch, SetStateAction} from "react";
//
// interface Props{
//     activeBar: string;
//     setActiveBar: Dispatch<SetStateAction<string>>;
//     value: string;
//     route: string;
// }
// const Button = ({activeBar, setActiveBar, value, route}: Props)=>{
//     return(
//         <>
//             <Link
//                 onClick={setActiveBar(route)}
//                 to={route}
//                 className={`${activeBar === route ? "bg-blue-1 text-blue-5 ": "text-gray-8"} hover:text-blue-5 px-5 py-2 rounded-lg min-w-52 duration-300`}
//             >
//                 {value}
//             </Link>
//         </>
//     )
// }
//
// export default Button