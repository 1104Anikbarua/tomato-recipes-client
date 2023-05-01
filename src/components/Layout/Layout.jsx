import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import Banner from "../Pages/Banner/Banner";
import History from "../Pages/History/History";
import Common from "../Pages/Common/Common";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Common></Common>
            },


            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;