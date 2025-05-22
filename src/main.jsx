import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import Github from "./components/github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route path="github" element={<Github />} />
      <Route
        path="*"
        element={
          <div className="text-3xl text-white text-center p-4 bg-orange-600">
            Page Not Found
          </div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
