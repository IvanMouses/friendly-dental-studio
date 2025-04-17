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
    path: "/friendly-dental-studio",
    Component: App,
    children: [
      {
        path: "/friendly-dental-studio",
        Component: MainPage,
      },
      { path: "/friendly-dental-studio/services-and-price", Component: ServicesAndPricePage },
      { path: "/friendly-dental-studio/doctors", Component: DoctorsPage },
      { path: "/friendly-dental-studio/discounts", Component: DiscountsPage },
      { path: "/friendly-dental-studio/journal", Component: JournalPage },
      { path: "/friendly-dental-studio/contacts", Component: ContactsPage },
    ],
  },
]);
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
