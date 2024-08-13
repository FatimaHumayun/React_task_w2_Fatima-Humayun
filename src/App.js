import React, { useState, useEffect } from "react";
import UserLogin from "./components/UserLogin.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listings from "./pages/Listings.jsx";

//Routing Implemented here
const router = createBrowserRouter([
  { path: "/", element: <UserLogin /> },
  { path: "/listings", element: <Listings /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
