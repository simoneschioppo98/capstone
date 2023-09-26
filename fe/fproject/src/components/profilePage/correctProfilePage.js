import React from "react";
import MyLogo from '../logo/Logo';
import MyFooter from '../footer/myfooter';
import CorrectNavbar from "../nav/profileNavbar";
import CorrectContainer from "../midContainer/correctContainer";

function CorrectProfilePage(){
    return(
        <>
        <MyLogo/>
        <CorrectNavbar/>
        <CorrectContainer/>
        <MyFooter/>
        </>
    )
}


export default CorrectProfilePage;