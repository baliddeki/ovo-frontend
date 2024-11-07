import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {CiEdit, CiSearch} from "react-icons/ci";
import {LuPlus} from "react-icons/lu";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {brands} from "@/assets/data.ts";
import {RiDeleteBinLine} from "react-icons/ri";
import DeleteBrand from "@/components/admin-components/brand-components/DeleteBrand.tsx";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import DeleteCategory from "@/components/admin-components/category-components/DeleteCategory.tsx";


const Categories = ()=>{
    const [categoryValue, setCategoryValue] = useState('')

    const handleSetCategoryValue = (value: string)=>{
        setCategoryValue(value)
    }
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Category List</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Categories</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
                {/*Top Selling Products*/}
                <div className={"bg-white p-6 rounded-lg vertical-spacing overflow-hidden"}>
                    <div className={"flex items-center justify-between flex-wrap gap-4"}>
                        <div className={"flex gap-4 items-center flex-wrap"}>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"flex gap-4 items-center"}>
                                <p className={"text-gray-400"}>Showing</p>
                                <Select>
                                    <SelectTrigger className="flex items-center justify-center [&_svg]:hidden max-w-[3.5rem]">
                                        <SelectValue placeholder="10" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ten">10</SelectItem>
                                        <SelectItem value="twenty">20</SelectItem>
                                        <SelectItem value="thirty">30</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className={"text-gray-400"}>entries</p>

                            </form>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"rounded-xl border-[1px] px-6 border-gray-[#111111] flex gap-4 items-center"}>
                                <input type={"search"}
                                       placeholder={"search here..."}
                                       className={"w-full py-3 ring-0 bg-none border-none outline-none"}/>
                                <button type={"submit"} className={"border-none shadow-none"}>
                                    <CiSearch className={"text-2xl"}/>
                                </button>
                            </form>
                        </div>

                        <Dialog>
                            <DialogTrigger className={" min-w-[9rem] border-[1px] border-blue-5 text-blue-5 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-blue-5 hover:text-white hover:border-none duration-300"}>
                                    <LuPlus/>Add New Product Category
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Create New Category Item</DialogTitle>
                                    <DialogDescription>
                                       <form method={"post"} action={"#"} className={"vertical-spacing mt-4"}>
                                           <Label htmlFor={'category'} className={"text-black"}>Category Name</Label>
                                           <Input type={"text"} id="category" name={"category"} placeholder={"category name"} className={"text-black"}/>
                                           <Button type={"submit"} className={"bg-blue-5 text-white rounded-lg px-5 py-2 w-fit"}>Create</Button>
                                       </form>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <div>
                        <Table className={"min-w-[46rem]"}>
                            <TableHeader>
                                <TableRow className={"font-bold"}>
                                    <TableHead>Category Id</TableHead>
                                    <TableHead>Category Name</TableHead>
                                    <TableHead className={"text-right"}>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    brands.map(({id,category})=>(
                                        <TableRow key={id} className={"text-gray-8"}>
                                            <TableCell>#{id}</TableCell>
                                            <TableCell>{category}</TableCell>
                                            <TableCell className={"flex justify-end"}>
                                                <div className={"flex gap-4 items-center text-2xl"}>
                                                    <Dialog>
                                                        <DialogTrigger className={"text-green-5"}>
                                                            <CiEdit  onClick={()=>handleSetCategoryValue(category)}/>
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>Edit {category}</DialogTitle>
                                                                <DialogDescription>
                                                                    <form method={"post"} action={"#"} className={"vertical-spacing mt-4"}>
                                                                        <Label htmlFor={'category'} className={"text-black"}>Category Name</Label>
                                                                        <Input
                                                                            onChange={
                                                                                (e)=> handleSetCategoryValue(e.target.value)
                                                                            }
                                                                            type={"text"}
                                                                            id="category"
                                                                            name={"category"}
                                                                            placeholder={"category name"}
                                                                            value={categoryValue}
                                                                            className={"text-black"}
                                                                        />
                                                                        <Button type={"submit"} className={"bg-blue-5 text-white rounded-lg px-5 py-2 w-fit"}>Update</Button>
                                                                    </form>
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <DeleteCategory categoryId={id}>
                                                        <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                    </DeleteCategory>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Categories