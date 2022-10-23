/*
 * @Date: 2022-10-20 21:14:15
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 20:40:18
 * @FilePath: \NodeReactProject-FE\src\router\index.tsx
 */
import { useRoutes, RouteObject, BrowserRouter, Navigate } from "react-router-dom"
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Home from "@/pages/home";
const routes:RouteObject[] = [
  {
    path: '/',
    element:<Navigate to="/home"/>
  },
  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path: "/register",
    element:<Register></Register>
  },
  {
    path: "/home",
    element:<Home></Home>
  },
  {
    path: '*',
    element:<>404 not found</>
  }
]

function Table() {
  const R = useRoutes(routes);
  return (
    R
  )
}
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Table></Table>
    </BrowserRouter>
  )
}