import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import Common from "../Pages/Common/Common";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import NotFound from "../NotFound/NotFound";
import Login from "../Shared/Authentication/Login/Login";
import Register from "../Shared/Authentication/Register/Register";
import RequireAuth from "../Shared/Authentication/RequireAuth/RequireAuth";
import AboutUs from "../Pages/AboutUs/AboutUs";
import UpdateProfile from "../Shared/Authentication/UpdateProfile/UpdateProfile";
import Location from "../Pages/Location/Location";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Common></Common>,
            },
            {
                path: '/recipes/:id',
                element: <RequireAuth>

                    <ChefRecipe></ChefRecipe>

                </RequireAuth>,
                loader: ({ params }) => {
                    const { id } = params;
                    return fetch(`https://batch-7-assignment-10-server-1104anikbarua.vercel.app/recipes/${id}`)
                }
            },

            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: 'about',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'map',
                element: <Location></Location>
            }
        ]
    }
])

export default router;