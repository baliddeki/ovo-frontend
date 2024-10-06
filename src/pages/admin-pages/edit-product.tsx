import {Link, useParams} from "react-router-dom";
import {products} from "@/assets/data.ts";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";


const EditProduct = ()=>{
    const {productId} = useParams();
    const product = products.find(product => product.id === productId);
    return (
        <div className={"vertical-spacing"}>
            <div className={"flex items-center justify-between gap-4"}>
                <h2 className={"text-2xl font-bold"}>Edit Product</h2>
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link to={"/"}>Dashboard</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <Link to={"/products"}>Products</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Edit Product</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>
            </div>
            {product?.name}
        </div>
    )
}

export default EditProduct;