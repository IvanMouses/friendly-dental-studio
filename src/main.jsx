import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App";
import MainPage from "./pages/MainPage/MainPage";
import ServicesAndPricePage from "./pages/ServicesAndPricePage/ServicesAndPricePage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import DiscountsPage from "./pages/DiscountsPage/DiscountsPage";
import JournalPage from "./pages/JournalPage/JournalPage";
import ContactsPage from "./pages/ContatcsPage/ContactsPage";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: MainPage,
      },
      { path: "/services-and-price", Component: ServicesAndPricePage },
      { path: "/doctors", Component: DoctorsPage },
      { path: "/discounts", Component: DiscountsPage },
      { path: "/journal", Component: JournalPage },
      { path: "/contacts", Component: ContactsPage },
    ],
  },
]);
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
