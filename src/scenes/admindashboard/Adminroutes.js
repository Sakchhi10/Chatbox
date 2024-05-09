import { HashRouter,Route,Routes } from "react-router-dom";
import DashboardAdmin from "./dashboard/index";
import DataGridDemo from "./Order";


const SellerModule=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<DashboardAdmin/>}/>
                <Route exact path="/orderlist" element={<DataGridDemo/>}/>

            </Routes>

        </HashRouter>
    );
}

export default SellerModule;


// import { lazy } from "react";

// // AdminRoutes.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Loadable from "components/Loadable";
// import DashboardLayout from "layout/DashboardLayout";

// const DashboardAdmin = Loadable(() => import("pages/admindashboard/dashboard"));
// const OrderList = Loadable(() => import("pages/admindashboard/Order"));
// const MyProfile = Loadable(() => import("pages/admindashboard/user/Profile"));

// function AdminRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<DashboardAdmin/>} />
//       <Route path="Order" element={<OrderList />} />
//       <Route path="Profile" element={<MyProfile />} />
//     </Routes>
//   );
// }

// export default AdminRoutes;