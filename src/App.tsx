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

function App() {
  return (
    <>
     <Routes>
         <Route path={"/"} element={<Admin />}>
             <Route index element={<AdminHome />}/>
             <Route path={"analytics"} element={<Analytics />}/>
             <Route path={"sales"} element={<Sales />}/>
             <Route path={"products"} element={<Products />}/>
             <Route path={"customers"} element={<Customers />}/>
             <Route path={"orders"} element={<Orders />}/>
             <Route path={"reports"} element={<Reports />}/>
             <Route path={"profile"} element={<Profile />}/>
             <Route path={"settings"} element={<Settings />}/>
         </Route>
         <Route path={"/admin"} element={<Admin />}>

         </Route>
         <Route path={"*"} element={<PageNotFound />}/>
     </Routes>
    </>
  )
}

export default App
