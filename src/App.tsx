import {Route, Routes} from "react-router-dom";
import Base from "@/layouts/Base.tsx";
import Home from "@/pages/home.tsx";
import Analytics from "@/pages/analytics.tsx";
import Customers from "@/pages/customers.tsx";
import Orders from "@/pages/orders.tsx";
import Products from "@/pages/products.tsx";
import Profile from "@/pages/profile.tsx";
import Reports from "@/pages/reports.tsx";
import Sales from "@/pages/sales.tsx";
import Settings from "@/pages/settings.tsx";
import PageNotFound from '@/pages/page-not-found.tsx';

function App() {
  return (
    <>
     <Routes>
         <Route path={"/"} element={<Base />}>
             <Route index element={<Home />}/>
             <Route path={"analytics"} element={<Analytics />}/>
             <Route path={"sales"} element={<Sales />}/>
             <Route path={"products"} element={<Products />}/>
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
