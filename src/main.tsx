// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./App.tsx";
// import Dashboard from "./Dashboard.tsx";

// const router = createBrowserRouter([
//     {
//         path: "/Spendly",
//         element: <App />,
//         // errorElement: <ErrorPage />,
//     },
//     {
//         path: "/Spendly/dashboard",
//         element: <Dashboard />,
//         // errorElement: <ErrorPage />,
//     },
// ]);

// createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//         <RouterProvider router={router} />
//     </StrictMode>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { createHashRouter, RouterProvider } from "react-router-dom";

// import App from "./App";
// import Dashboard from "./Dashboard";

// const router = createHashRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
//     {
//         path: "/dashboard",
//         element: <Dashboard />,
//     },
// ]);

// createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//         <RouterProvider router={router} />
//     </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename="/Spendly">
            <Routes>
                <Route path="/Spendly" element={<App />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
