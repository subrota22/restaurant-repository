import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../MainLayOut/MainLayOut";
import About from "../Pages/About/About";
import Carts from "../Pages/Carts/Carts";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Pages from "../Pages/Pages/Pages";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Services from "../Pages/Services/Services";
import PageNotFound from "../Share/PageNotFound/PageNotFound";

export const routers = createBrowserRouter([
    {
        path: "/", element: <MainLayOut></MainLayOut>, children: [

            {
                path: "/", errorElement: <h2 className="mt-5 mx-auto  text-center text-danger fs-1 fw-bolder">You have an error !! </h2>, children: [

                    {
                        path: "/", element: <Home></Home>
                    },
                    {
                        path: "/about", element: <About></About>
                    },
                    {
                        path: "/menu", element: <Menu></Menu>
                    },
                    {
                        path: "/pages", element: <Pages></Pages>
                    },
                    {
                        path: "/contact", element: <Contact></Contact>
                    },
                    {
                        path: "/cart", element: <Carts></Carts>
                    },
                    {
                        path: "/privacy-policy", element: <PrivacyPolicy></PrivacyPolicy>
                    },
                    {
                        path: "/services", element: <Services></Services>
                    },
                    {
                        path: "*", element: <PageNotFound></PageNotFound>
                    }
                ]
            }
        ]
    }
]);


