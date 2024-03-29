import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Quote from "./Component/Quote/Quote";
import Restaurants from "./Component/Restaurants/Restaurants";
import Foods from "./Component/Foods/Foods";
import Contact from "./Component/Contact/Contact";
import Foodsrecipe from "./Component/Foods/Foodsrecipe";

function App() {
  // create browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/quote",
          element: <Quote></Quote>,
        },
        {
          path: "/resturants",
          element: <Restaurants></Restaurants>,
        },
      ],
    },
    {
      path: "/foods",
      element: <Foods></Foods>,
    },
    {
      path: "/foods/:id",
      element: <Foodsrecipe></Foodsrecipe>,
    },
    {
      path: "/Contact",
      element: <Contact></Contact>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
