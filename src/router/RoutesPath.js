import { lazy } from "react"
const Dashboard = lazy(() => import("../views/Dashboard"))
const Theater = lazy(() => import("../views/Theater"))

export const Paths = [
  {
    title: "dashboard",
    path: "/",
    element: Dashboard,
  },
  {
    title: "movie",
    path: ":id",
    element: Theater,
  },
]
