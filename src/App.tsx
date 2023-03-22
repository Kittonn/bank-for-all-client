import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/screens/Home";
import PeerShareRoom from "@/screens/PeerShareRoom";
import Login from "@/screens/Login";
import Register from "@/screens/Register";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/peershare-room", element: <PeerShareRoom /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
