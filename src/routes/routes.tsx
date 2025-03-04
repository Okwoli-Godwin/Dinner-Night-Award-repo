import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Homepage from "../pages/Homepage";
import Ticket from "../pages/Ticket";
import SignIn from "../pages/SignIn";
import DashboardLayout from "../components/layout/DashboardLayout";
import TicketSold from "../components/Dashbord-component/TicketSold";
import Gallery from "../pages/Gallery";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path:'/gallery',
                element: <Gallery />
            },
            {
                path: "/get-ticket",    
                element: <Ticket />
            }
        ]
    },
    {
        path: '/signIn',
        element: <SignIn />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element:<TicketSold />
            }
        ]
    },

])