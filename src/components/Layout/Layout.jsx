import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
// import Banner from "../Pages/Banner/Banner";
// import History from "../Pages/History/History";
import Common from "../Pages/Common/Common";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import NotFound from "../NotFound/NotFound";
import Login from "../Shared/Authentication/Login";
import Register from "../Shared/Authentication/Register/Register";



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
                element: <ChefRecipe></ChefRecipe>,
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