import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar.tsx";
import {Link} from "react-router-dom";
import {FaMessage, FaRegBell} from "react-icons/fa6";
import {Notification} from "@/assets/types.ts";
import {shortenText} from "@/assets/utils.tsx";

const Notifications = ({notifications}:  {notifications: Notification[]})=>{
    const notificationLength = notifications.filter(({status})=>status == 'read').length

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <div className={"relative rounded-full h-10 w-10 bg-notification center-items p-2"}>
                        <FaRegBell className={"text-2xl text-black"}/>
                        <p className={"absolute -top-1 -right-1 min-h-5 min-w-5 max-w-6 max-h-6 p-2 rounded-full bg-orange-5 center-items text-sm text-white font-light"}>{notificationLength}</p>
                    </div>
                </MenubarTrigger>
                <MenubarContent className={'mx-8 md:mx-12'}>
                    {
                        notifications.length > 0 ?

                            notifications.map(({id, title, message, status}) =>(
                                <>
                                    {
                                        status == 'read' &&
                                        <MenubarItem className={'group max-w-[24rem]'}>
                                            <Link to={`/notification/${id}`} className={"flex items-center gap-4"}>
                                                <FaMessage className={"text-2xl text-primary group-hover:text-white"}/>
                                                <div className={'group-hover:text-white'}>
                                                    <p className="font-semibold text-lg">{title}</p>
                                                    <p>{shortenText(message)}</p>
                                                </div>
                                            </Link>
                                        </MenubarItem>
                                    }
                                </>

                            ))
                            :
                            <MenubarItem className={'group'}>
                                <div className={"flex items-center gap-4"}>
                                    <FaMessage className={"text-2xl text-primary group-hover:text-white"}/>
                                    Messages are empty
                                </div>
                            </MenubarItem>
                    }
                    <MenubarItem className={'focus:bg-primary text-primary'}>
                        <Link
                            to={"/notifications"}
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-primary-900 data-[focus]:text-gray-00">
                            View All
                        </Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}


export default Notifications