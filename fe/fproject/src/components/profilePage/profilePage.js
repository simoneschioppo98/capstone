import React from "react";
import MyLogo from '../logo/Logo';
import MyNavbar from '../nav/Navbar';
import MyFooter from '../footer/myfooter';
import ProfileContainer from "../profilecontainer/profileContainer";
import { Link } from "react-router-dom";

function MyProfilePage(){
    return(
        <>
        <MyLogo/>
        <MyNavbar/>
        <ProfileContainer/>
        <MyFooter/>
        </>
    )
}


export default MyProfilePage;