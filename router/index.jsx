import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import Question from "../pages/Question";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
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
            path: "/blog",
            element: <Blog />,
          },
          {
            path: "/Question",
            element: <Question />,
          },
        ],
      },
    ],
  },
]);
// {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/blog",
//         element: <Blog />,
//       },
