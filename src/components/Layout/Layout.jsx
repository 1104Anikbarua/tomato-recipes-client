import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
// import Banner from "../Pages/Banner/Banner";
// import History from "../Pages/History/History";
import Common from "../Pages/Common/Common";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import NotFound from "../NotFound/NotFound";
import Login from "../Shared/Authentication/Login/Login";
import Register from "../Shared/Authentication/Register/Register";
import RequireAuth from "../Shared/Authentication/RequireAuth/RequireAuth";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Common></Common>,
                // loader: () => {
                //     return fetch('http://localhost:5000/info')
                // }
            },
            {
                path: '/recipes/:id',
                element: <RequireAuth>

                    <ChefRecipe></ChefRecipe>

                </RequireAuth>,
                loader: ({ params }) => {
                    const { id } = params;
                    // console.log(id)
                    return fetch(`http://localhost:5000/recipes/${id}`)
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
            }
        ]
    }
])

export default router;