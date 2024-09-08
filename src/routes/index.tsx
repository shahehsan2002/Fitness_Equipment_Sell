
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../components/Products";
import AboutUs from "../pages/AboutUs";
// import Products from "../pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
    ],
  },
]);
