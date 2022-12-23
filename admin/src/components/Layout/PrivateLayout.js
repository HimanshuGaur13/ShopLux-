import React from "react"
import "./privateLayout.css"
import Sidebar from "../sidebar/Sidebar"
import Topbar from "../topbar/Topbar"
import { Outlet } from "react-router"

const PrivateLayout = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>

  )
}

export default PrivateLayout