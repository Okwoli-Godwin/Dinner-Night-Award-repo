import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Homepage from "../pages/Homepage";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            }
        ]
    }
])