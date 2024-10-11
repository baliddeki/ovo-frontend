import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {products} from "@/assets/data.ts";
import {LuEye, LuPlus} from "react-icons/lu";
import {CiEdit, CiSearch} from "react-icons/ci";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {RiDeleteBinLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import DeleteProduct from "@/components/admin-components/products-components/DeleteProduct.tsx";


const Products = ()=>{
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Products List</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Products</BreadcrumbPage>
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
                        <Link to={"/add-new-product"}
                            className={" min-w-[9rem] border-[1px] border-blue-5 text-blue-5 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-blue-5 hover:text-white hover:border-none duration-300"}>
                            <LuPlus/>Add New
                        </Link>
                    </div>
                    <div>
                        <Table className={"min-w-[46rem]"}>
                            <TableHeader>
                                <TableRow className={"font-bold"}>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Total Sales</TableHead>
                                    <TableHead>Availability</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    products.slice(0,5).map(({id,image, name, category,price,quantity, totalSales, availability })=>(
                                        <TableRow key={id} className={"text-gray-8"}>
                                            <TableCell className={"flex gap-2 items-center"}>
                                                <img src={image} alt={name} className={"hidden md:block w-14 h-14 object-cover"}/>
                                                {name}
                                            </TableCell>
                                            <TableCell>{category}</TableCell>
                                            <TableCell>{price}</TableCell>
                                            <TableCell>{quantity}</TableCell>
                                            <TableCell>{totalSales}</TableCell>
                                            <TableCell>
                                                {
                                                    availability === "In Stock" ?
                                                        <p className={"text-green-5 bg-green-2 px-2 py-1 w-fit"}>{availability}</p>
                                                        :
                                                        <p className={"text-orange-5 bg-orange-2 px-2 py-1 w-fit"}>{availability}</p>
                                                }
                                            </TableCell>
                                            <TableCell>
                                                <div className={"flex gap-4 items-center text-2xl"}>
                                                    <Link to={`/admin/product/${id}`} className={"text-blue-5"}><LuEye /></Link>
                                                    <Link to={`/admin/edit-product/${id}`}  className={"text-green-5"}><CiEdit/></Link>
                                                    <DeleteProduct productId={id}>
                                                        <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                    </DeleteProduct>
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

export default Products