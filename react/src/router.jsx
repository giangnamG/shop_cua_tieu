import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import UserLayout from "./components/user/UserLayout";
import AllProductPage from "./components/user/AllProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/home/allProducts",
        element: <AllProductPage />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router
