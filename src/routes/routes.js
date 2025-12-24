// NOTE: IMPORT OTHER CONSTANTS AND DEPENDENCIES
import Root from "../Layout/Root";
import {createBrowserRouter} from "react-router-dom";
import ErrorOccurPage from "../pages/Error";
import PlanClientHomePage from "../pages/ClientHome";

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
        ],
    },
]);

export default router;
