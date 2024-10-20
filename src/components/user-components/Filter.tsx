import {CgClose} from "react-icons/cg";
import {useState} from "react";
import {VscSettings} from "react-icons/vsc";
import {products} from "@/assets/data.ts";

const Filter = ()=>{
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const handleOpenFilter =()=>{
        setOpenFilter(prev=>!prev);
    }

    const handleSubmitForm = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
    }
    return (
        <>
            <div>
                <button
                    onClick={handleOpenFilter}
                    className={"rounded-3xl hover:bg-green-5 hover:text-white bg-[rgba(210,210,210,.7)] w-fit px-6 py-2 flex items-center gap-2 font-medium duration-300"}>
                    <VscSettings/>
                    Filter
                </button>
                <div onClick={handleOpenFilter}
                     className={`fixed right-0 top-0 bottom-0 left-0 ${openFilter ? "bg-[rgba(0,0,0,.3)]" : "-translate-x-full duration-200"} w-full`}>
                    <div onClick={e => e.stopPropagation()}
                         className={`fixed left-0 top-0 bottom-0 shadow-lg shadow-blue-1 ${openFilter ? "bg-white" : "-translate-x-full"} max-w-[27rem] w-full duration-300 flex flex-col`}>
                        <div className={"flex items-center justify-between section border-b-[1px]"}>
                            <h3 className={"text-lg font-bold"}>Search Products</h3>
                            <button onClick={handleOpenFilter} className={"text-2xl"}><CgClose/></button>
                        </div>
                        <div>
                            <form onSubmit={handleSubmitForm} className={"section flex items-center gap-1 mt-8"}>
                                <input type={"search"} className={'border py-2 px-4 focus-visible:outline-dotted focus-visible:outline-[0.5px]'} />
                                <button type={"submit"} className={"bg-[rgba(210,210,210,.7)] rounded-3xl py-2 px-6 hover:bg-green-5 hover:text-white"}>Search</button>
                            </form>
                            <div className={"section"}>
                                <h3 className={"mb-8 text-lg font-bold"}>Product Categories</h3>
                                <form onSubmit={handleSubmitForm} className={"flex items-center gap-4 flex-wrap"}>
                                    {
                                        products.map(({category})=> (
                                            <button type={"submit"} className={"py-2 px-4 border-[1px]"}>{category}</button>
                                        ))
                                    }

                                </form>
                            </div>
                            <div className={"section"}>
                                <h3 className={"mb-8 text-lg font-bold"}>Filter by Price</h3>
                                <form onSubmit={handleSubmitForm}>
                                    <div className={"flex items-center justify-between gap-4"}>
                                        <button type={"submit"} className={"bg-[rgba(210,210,210,.7)] py-2 px-4 rounded-3xl"}>filter</button>
                                        <p className={"text-sm font-light"}>Price: <span>$19.00</span></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter