// NOTE: IMPORT OTHER CONSTANTS AND DEPENDENCIES
import Root from "../Layout/Root";
import {createBrowserRouter} from "react-router-dom";
import ErrorOccurPage from "../pages/Error";
import PlanClientHomePage from "../pages/ClientHome";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorOccurPage/>,
        children: [
            {
                index: true,
                element: <PlanClientHomePage/>,
            },
            {
                path: "orders",
                element: <Orders />
            }
        ],
    },
]);

export default router;
