import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Homepage from "../pages/Homepage";
import SignIn from "../pages/SignIn";
import Gallery from "../pages/Gallery";
import DashboardLayout from "../components/layout/DashboardLayout";
import TicketSold from "../components/Gallery-components/Dashbord-component/TicketSold";

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
                path: "/gallery",
                element: <Gallery />,
            }
        ]
    },

    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element:<TicketSold/>
            }
        ]
    },

    {
        path: '/signIn',
        element: <SignIn/>
    }
  
])