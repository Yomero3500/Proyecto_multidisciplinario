<<<<<<< HEAD:proyecto_multidisciplinario/src/pages/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/SideMenu";


function Layout() {
 /* const location = useLocation();
  const isMenuRoute = location.pathname === "/inicio";*/
  /* {!isMenuRoute&&<NavBar />} esta parte va en el return*/
  return (
    <>
       <SideMenu>
               <Outlet />
       </SideMenu>

  

    </>
  );
}

export default Layout;
=======
import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/SideMenu";


function Layout() {
 /* const location = useLocation();
  const isMenuRoute = location.pathname === "/inicio";*/
  /* {!isMenuRoute&&<NavBar />} esta parte va en el return*/
  return (
    <>
       <SideMenu>
               <Outlet />
       </SideMenu>

  

    </>
  );
}

export default Layout;
>>>>>>> main:src/pages/Layout.jsx
