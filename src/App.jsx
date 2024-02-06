import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Protfolio from "./Component/Protfolio/Protfolio";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound/NotFound";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "protfolio", element: <Protfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
