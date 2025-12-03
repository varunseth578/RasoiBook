import React, { useEffect, useState } from "react";
import Modal from "./modal"
import Inputform from "./Inputform";
import { NavLink } from "react-router-dom";

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  let token=localStorage.getItem("token");
  const [isLoggedIn,setIsLoggedIn]=useState(token  ? false : true);
  useEffect(()=>{
    setIsLoggedIn(token  ? false : true); 
  },[token]);

  const checkLogin = () => {
    if(token){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    setIsLoggedIn(true);}

    else{
    setIsOpen(true)}
  };

  return (
    <>
      <header>
        <h2>RasoiBook</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li onClick={()=>isLoggedIn && setIsOpen(true)}><NavLink to={!isLoggedIn ?"/myRecipe":"/"}>My Recipe</NavLink></li>
          <li onClick={()=>isLoggedIn && setIsOpen(true)}><NavLink to={!isLoggedIn ?"/favRecipe":"/"}>Favourites</NavLink></li>
          <li onClick={checkLogin}><p className="login">{(isLoggedIn)?"Login":"Logout"}</p></li>
        </ul>
      </header>

      {(isOpen) && <Modal onClose={() => setIsOpen(false)} ><Inputform setIsOpen={()=>setIsOpen(false)} /></Modal>}
    </>
  );
};
