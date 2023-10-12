import React, { useState } from "react";
import { FaTrello, FaUserPlus, FaUsers, FaBars, FaUser } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBorderColor } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { NavLink } from "react-router-dom";

const SideMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/inicio/usuario",
      name: "Usuario",
      icon: <FaUser/>,
    },
    {
      path: "/inicio/panel",
      name: "Panel",
      icon: <FaTrello />,
    },
    {
      path: "/inicio/agregarusuarios",
      name: "Agregar usuario",
      icon: <FaUserPlus />,
    },
    {
      path: "/inicio/empleados",
      name: "Empleados",
      icon: <FaUsers />,
    },
    {
      path: "/inicio/cocina",
      name: "Cocina",
      icon: <FaKitchenSet />,
    },
    {
      path: "/inicio/ordenes",
      name: "Ordenes",
      icon: <MdBorderColor />,
    },
    {
      path: "/",
      name: "Salir",
      icon: <ImExit />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Menu
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideMenu;
