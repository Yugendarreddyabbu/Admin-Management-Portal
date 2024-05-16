import React, { useEffect } from 'react';
import { routers } from '../Configuration/ConfigurationUI';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../screens/Dashboard/Dashboard';
import Invoices from '../screens/Invoices/Invoices';
import Payments from '../screens/Payments/Payments';
import MyBookings from '../screens/MyBookings/MyBookings';
import Profile from '../screens/Profile/Profile';
export const Router = (props) => {
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path={routers.Dashboard} element={<Dashboard />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/myBookings" element={<MyBookings />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>


        </BrowserRouter>)
}
