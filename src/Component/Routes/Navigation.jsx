import React from 'react'
import Register from "../Public/Register";
import Login from "../Public/Login";
import Home from "../Public/Home";
import Search from "../Public/Search";
import Account from "../Private/Common/Account";
import Cart from "../Private/Customer/Cart";
import SellerDashboard from "../Private/Seller/SellerDashboard";
import Wishlist from "../Private/Customer/Wishlist";
import Orders from "../Private/Customer/Orders";
import EditProfile from "../Private/Common/EditProfile";
import VerifyOtp from '../Public/VerifyOtp';
import SellerOrder from '../Private/Seller/SellerOrder';


const navs=[
    {
        path: "/seller/register",
        element: <Register />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
      {
        path: "/customer/register",
        element: <Register />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
      {
        path: "/login",
        element: <Login />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
      {
        path: "/verify-otp",
        element: <VerifyOtp />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
        // -------------------------- BEFORE AND AFTER AUTH ----------------
      {
        path: "/",
        element: <Home />,
        requireAuth: false,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      {
        path: "/search",
        element: <Search />,
        requireAuth: false,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      // ---------------------- COMMON AND AFTER AUTH ----------------------
      {
        path: "/account",
        element: <Account />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      // --------------------------- CUSTOMER --------------------------
      {
        path: "/cart",
        element: <Cart />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      {
        path: "/orders",
        element: <Orders />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      // ------------------------- SELLER ----------------------------
      {
        path: "/seller-dashboard",
        element: <SellerDashboard />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "SELLER",
      },
      {
        path: "/seller-orders",
        element: <SellerOrder />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "SELLER",
      },

]

export default navs
