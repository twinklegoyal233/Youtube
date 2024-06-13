import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Video from "../Pages/Video/Video";
import Navbar from "../Components/Navbar/Navbar";
import store from "../utils/store";
import { Provider } from "react-redux";

// Layout component to wrap around pages and include Navbar
const AppLayout = () => (
  <div>
    <Navbar />
    <Outlet /> {/* Renders the matched child route */}
  </div>
);

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />, // Use AppLayout for routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/video/:categoryId/:videoId", element: <Video /> },
    ],
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

export default App;
