/*
 * @Date: 2022-10-20 21:14:15
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-24 23:22:36
 * @FilePath: \NodeReactProject-FE\src\router\index.tsx
 */
import { useRoutes, RouteObject, BrowserRouter, Navigate } from "react-router-dom"
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Home from "@/pages/home";
import Readbook from "@/pages/home/components/readbook";
import { Test } from "@/pages/home/components/test";
const routes:RouteObject[] = [
  {
    path: '/',
    element:<Navigate to="/home/readbook"/>
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
    element: <Home></Home>,
    children: [
      {
        path: "readbook",
        element: <Readbook></Readbook>
      }
    ]
  },
  {
    path: "/test",
    element:<Test></Test>
  },
  {
    path: '*',
    element:<>404 not found</>
  }, 
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