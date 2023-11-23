import Header from "../assets/jsx/Header"
import { Outlet } from "react-router-dom"
export default function Root(){
    return <>
        <Header/>
        <Outlet/>
    </>
    }