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
import UserProduct from "@/pages/user-pages/user-product.tsx";
import Cart from "@/pages/user-pages/cart.tsx";
import AddNewCustomer from "@/pages/admin-pages/add-new-customer.tsx";
import EditCustomer from "@/pages/admin-pages/edit-customer.tsx";
import CustomerDetails from "@/pages/admin-pages/customer-details.tsx";
import UserOrders from "@/pages/user-pages/orders.tsx";
import UserAccount from "@/pages/user-pages/account.tsx";
import UserOrderDetails from "@/pages/user-pages/order-details.tsx";

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
             <Route path={"shop"} element={<Shop/>}/>
             <Route path={"product/:productId"} element={<UserProduct />}/>
             <Route path={"contact"} element={<Contact />}/>
             <Route path={"cart"} element={<Cart/>}/>
             <Route path={"orders"} element={<UserOrders/>}/>
             <Route path={"order-details/:orderId"} element={<UserOrderDetails />}/>
             <Route path={"my-account"} element={<UserAccount />}/>
             <Route path={"signin"} element={<SignIn />}/>
             <Route path={"signup"} element={<SignUp />}/>
         </Route>
         <Route path={"/admin"} element={<Admin />}>
             <Route index element={<AdminHome />}/>
             <Route path={"analytics"} element={<Analytics />}/>
             <Route path={"sales"} element={<Sales />}/>
             {/*Products*/}
             <Route path={"products"} element={<Products />}/>
             <Route path={"add-new-product"} element={<AddNewProduct />}/>
             <Route path={"product/:productId"} element={<Product />}/>
             <Route path={"edit-product/:productId"} element={<EditProduct />}/>
             {/*Customers*/}
             <Route path={"customers"} element={<Customers />}/>
             <Route path={"add-new-customer"} element={<AddNewCustomer />}/>
             <Route path={"customer/:customerId"} element={<CustomerDetails />}/>
             <Route path={"edit-customer/:customerId"} element={<EditCustomer />}/>
             {/**/}
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
