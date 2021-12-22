import React, { useContext } from 'react';
import UserPage from "./UserPage";
import Landing from "./Landing";
export default function Home() {
    if (localStorage.getItem("loggedIn") == "1") return <UserPage/>;
    else return <Landing/>;
}
