import { createBrowserRouter } from "react-router-dom";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Shop from '../src/components/Shop';
import Main from "../src/Layout/main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <Shop />
            },
        ]
    }
])

export default router;