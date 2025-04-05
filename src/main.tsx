import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Dashboard from "./Dashboard.tsx";

const router = createBrowserRouter([
    {
        path: "/Spendly",
        element: <App />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/Spendly/dashboard",
        element: <Dashboard />,
        // errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
