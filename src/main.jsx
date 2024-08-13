import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Wallets from "./pages/Wallets/Wallets.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <Home />,
    },
    {
        path: "wallets",
        element: <Wallets />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
