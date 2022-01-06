import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"></span>#<p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://t4.ftcdn.net/jpg/04/24/15/73/360_F_424157378_2jNl1im7DAT0rNDQvLuyISYNwBsstX8m.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Mayank Ukey</h2>
        <h4>mayank.ukey@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">69</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">420</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
