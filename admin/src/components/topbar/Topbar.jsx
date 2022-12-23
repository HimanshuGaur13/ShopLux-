import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, Person } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><a href="/" style={{textDecoration : "none", color: "black"}}>ShopluxAdmin</a></span>
        </div>
        <div className="topRight">
          { /* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */ }
          <div className="topbarIconContainer" >
            <Person />
          </div>
        </div>
      </div>
    </div>
  );
}