import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pagelayout from "./pagelayout/Pagelayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import { getMoviesData } from "./api/GetmoviesData";
import getMovieDetails from "./api/GetMovieDetails";
import DisplayMovieData from "./ui/DisplayMovieData";
import getContactData from "./api/GetcontactData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pagelayout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/movies",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "movies/:movieID",
          element: <DisplayMovieData />,
          loader: getMovieDetails,
        },

        {
          path: "/contact",
          element: <Contact />,
          action: getContactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
