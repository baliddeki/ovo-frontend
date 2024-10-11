import {Route, Routes} from "react-router-dom";
import Admin from "@/layouts/Admin.tsx";
import AdminHome from "@/pages/admin-pages/admin-home.tsx";
import Analytics from "@/pages/admin-pages/analytics.tsx";
import Customers from "@/pages/admin-pages/customers.tsx";
import Orders from "@/pages/admin-pages/orders.tsx";
import Products from "@/pages/admin-pages/products.tsx";
import Profile from "@/pages/admin-pages/profile.tsx";
import Reports from "@/pages/admin-pages/reports.tsx";
import Sales from "@/pages/admin-pages/sales.tsx";
import Settings from "@/pages/admin-pages/settings.tsx";
import PageNotFound from '@/pages/admin-pages/page-not-found.tsx';
import Product from "@/pages/admin-pages/product.tsx";
import EditProduct from "@/pages/admin-pages/edit-product.tsx";
import AddNewProduct from "@/pages/admin-pages/add-new-product.tsx";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import SignUp from "@/pages/auth/sign-up.tsx";
import SignIn from "@/pages/auth/sign-in.tsx";
import UserLayout from "@/layouts/UserLayout.tsx";
import UserHome from "@/pages/user-pages/user-home.tsx";
import About from "@/pages/user-pages/about.tsx";
import Contact from "@/pages/user-pages/contact.tsx";
import Shop from "@/pages/user-pages/shop.tsx";

function App() {
  return (
    <>
     <Routes>
         <Route path={"/auth"} element={<AuthLayout />}>
             <Route path={"signin"} element={<SignIn />}/>
             <Route path={"signup"} element={<SignUp />}/>
         </Route>

         <Route path={"/"} element={<UserLayout />}>
            <Route index element={<UserHome />}/>
             <Route path={"about"} element={<About/>}/>
             <Route path={"contact"} element={<Contact />}/>
             <Route path={"shop"} element={<Shop/>}/>
         </Route>
         <Route path={"/admin"} element={<Admin />}>
             <Route index element={<AdminHome />}/>
             <Route path={"analytics"} element={<Analytics />}/>
             <Route path={"sales"} element={<Sales />}/>
             <Route path={"products"} element={<Products />}/>
             <Route path={"add-new-product"} element={<AddNewProduct />}/>
             <Route path={"product/:productId"} element={<Product />}/>
             <Route path={"edit-product/:productId"} element={<EditProduct />}/>
             <Route path={"customers"} element={<Customers />}/>
             <Route path={"orders"} element={<Orders />}/>
             <Route path={"reports"} element={<Reports />}/>
             <Route path={"profile"} element={<Profile />}/>
             <Route path={"settings"} element={<Settings />}/>
         </Route>
         <Route path={"*"} element={<PageNotFound />}/>
     </Routes>
    </>
  )
}

export default App
