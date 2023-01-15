import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import CarResaleDetail from "../Components/Detail/CarResaleDetail/CarResaleDetail";
import CloudKitchenDetail from "../Components/Detail/CloudKitchenDetail/CloudKitchenDetail";
import HappyLearningDetail from "../Components/Detail/HappyLearningDetail/HappyLearningDetail";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([{
    path:'/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/carresaledetail',
            element: <CarResaleDetail></CarResaleDetail>
        },
        {
            path: '/cloudkitchendetail',
            element: <CloudKitchenDetail></CloudKitchenDetail>
        },
        {
            path: '/happylearningdetail',
            element: <HappyLearningDetail></HappyLearningDetail>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]

}])
export default router;