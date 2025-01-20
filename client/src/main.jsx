import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import PostList from "./pages/PostList.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Create from "./pages/Create.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/:car",
        element: <SinglePost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
