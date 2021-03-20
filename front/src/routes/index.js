import { lazy } from "react";

const routes = [
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import(
        "../components/views/LoginPage/LoginPage.jsx" /* webpackChunkName: "login" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() =>
      import(
        "../components/views/RegisterPage/RegisterPage.jsx"
        /* webpackChunkName: "register" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/test",
    label: "Test",
    exact: true,
    component: lazy(() =>
      import("../components/views/TestPage.jsx" /* webpackChunkName: "test" */)
    ),
    private: true,
    restricted: true,
  },
];

export default routes;
