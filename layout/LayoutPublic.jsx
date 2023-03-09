import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";


const LayoutPublic = () => {
 return (
   <>
     <hr />
     <Menu />
     <hr />
     <Outlet />
     <hr />
     <footer>Footer</footer>
   </>
 );
};

export default LayoutPublic;
