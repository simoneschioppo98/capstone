import React from "react";
import MyLogo from '../logo/Logo';
import MyNavbar from '../nav/Navbar';
import MyFooter from '../footer/myfooter';
import { Link } from "react-router-dom";

function CorrectProfilePage(){
    return(
        <>
        <MyLogo/>
        <MyNavbar/>
        <MyFooter/>
        </>
    )
}


export default CorrectProfilePage;