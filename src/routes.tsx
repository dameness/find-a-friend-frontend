import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Pets } from "./pages/pets";
import { RegisterPet } from "./pages/registerPet";
import { Pet } from "./pages/pet";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "pets",
        children: [
          {
            index: true,
            element: <Pets />,
          },
          {
            path: "register",
            element: <RegisterPet />,
          },
          {
            path: ":id",
            element: <Pet />,
          },
        ],
      },
    ],
  },
]);
