import React from "react";
import MyLogo from "../logo/Logo";
import MyNavbar from "../nav/Navbar";
import CentralContainer from "../midContainer/container";
import MyFooter from "../footer/myfooter";

function FirstPage(){
    return(
        <>
         <MyLogo />
      <MyNavbar />
      <CentralContainer />
      <MyFooter />
        </>
    )
}

export default FirstPage;