import { Outlet, useLocation } from "react-router-dom";


function Layout() {
 /* const location = useLocation();
  const isMenuRoute = location.pathname === "/inicio";*/
  /* {!isMenuRoute&&<NavBar />} esta parte va en el return*/
  return (
    <>
     
       <Outlet />
  

    </>
  );
}

export default Layout;
