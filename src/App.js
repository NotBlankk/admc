import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallary from "./components/Gallery";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/service",
      element: (
        <>
          <Navbar />
          <Service />
        </>
      ),
    },
    {
      path: "/gallary",
      element: (
        <>
          <Navbar />
          <Gallary />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
