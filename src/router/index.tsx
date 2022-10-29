/*
 * @Date: 2022-10-20 21:14:15
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-29 10:30:31
 * @FilePath: \NodeReactProject-FE\src\router\index.tsx
 */
import { useRoutes, RouteObject, BrowserRouter, Navigate } from "react-router-dom"
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Home from "@/pages/home";
import Readbook from "@/pages/home/components/readbook";
import SelfDetails from "@/pages/home/components/details";
import Search from "@/pages/home/components/search";
import Upload from "@/pages/home/components/upload";
import Reward from "@/pages/home/components/reward";
const routes:RouteObject[] = [
  {
    path: '/',
    element:<Navigate to="/login"/>
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
        path: "",
        element:<Navigate to="homepage"></Navigate>
      },
      {
        path: "readbook",
        element: <Readbook></Readbook>
      },
      {
        path: 'homepage',
        element: <SelfDetails></SelfDetails>
      },
      {
        path: "search",
        element:<Search></Search>
      },
      {
        path: "upload",
        element:<Upload></Upload>
      },
      {
        path: "reward",
        element:<Reward></Reward>
      }
    ]
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