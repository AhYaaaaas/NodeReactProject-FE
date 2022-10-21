/*
 * @Date: 2022-10-20 21:14:15
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-20 21:34:09
 * @FilePath: \NodeReactProject-FE\src\router\index.tsx
 */
import { useRoutes, RouteObject, BrowserRouter } from "react-router-dom"
import Login from "../components/login/index";
import Register from "../components/register/index";
const routes:RouteObject[] = [
  {
    path: '/',
    element:<div>INDEX</div>
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