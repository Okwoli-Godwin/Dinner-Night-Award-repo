import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Homepage from "../pages/Homepage";
import Ticket from "../pages/Ticket";

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
                path: "/get-ticket",
                element: <Ticket />
            }
        ]
    }
])