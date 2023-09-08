import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Skills from "./pages/Skills.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/footer.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/contactme",
    element: <ContactMe />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={route} />
    <Footer />
  </React.StrictMode>
);
