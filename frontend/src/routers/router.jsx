import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import PrivateRoute from "./PrivateRoom.jsx";
import AdminRoute from "./AdminRoute.jsx";
import About from "../pages/about/About.jsx";
import Privacy from "../pages/about/Privacy.jsx";
import Terms from "../pages/about/Terms.jsx";
import Contact from "../pages/about/Contact.jsx";
import Services from "../pages/about/Services.jsx";
import Subscribe from "../pages/about/Subscribe.jsx";

// Books pages
import SingleBook from "../pages/books/SingleBook.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckoutPage from "../pages/books/CheckoutPage.jsx";
import OrderPage from "../pages/books/OrderPage.jsx";
import Wishlist from "../pages/books/Wishlist.jsx";
import Search from "../pages/home/Search.jsx";

// Dashboard pages
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import AddBook from "../pages/dashboard/addBook/AddBook.jsx";
import ManageBook from "../pages/dashboard/manageBooks/ManageBook.jsx";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook.jsx";
import UserDashboard from "../pages/dashboard/users/UserDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div className="flex justify-center items-center min-h-screen"><h1 className="text-2xl font-bold">Page Not Found</h1></div>,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },        {
          path: "/privacy",
          element: <Privacy />
        },
        {
          path: "/terms",
          element: <Terms />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/subscribe",
          element: <Subscribe />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/admin-login",
          element: <AdminLogin />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/books/:id",
          element: <SingleBook />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckoutPage /></PrivateRoute>
        },
        {
          path: "/orders",
          element: <PrivateRoute><OrderPage /></PrivateRoute>,
        },
        {
          path: "/wishlist",
          element: <Wishlist />
        }
    ]
  },
  {
    path: "/user-dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <UserDashboard />
      },
      {
        path: "add-book",
        element: <AddBook />
      },
      {
        path: "manage-books",
        element: <ManageBook />
      },
      {
        path: "edit-book/:id",
        element: <UpdateBook />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminRoute><DashboardLayout /></AdminRoute>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "manage-books",
        element: <ManageBook />
      },
      {
        path: "add-book",
        element: <AddBook />
      },
      {
        path: "edit-book/:id",
        element: <UpdateBook />
      }
    ]
  }
]);
export default router;