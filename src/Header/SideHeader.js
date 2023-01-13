import {
  Dashboard,
  CellTower,
  Rocket,
  Person,
  MonetizationOnOutlined,
  AutoAwesomeMotion,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../Header/SideHeader.css";
import SidebarLink from "./SidebarLInk";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function SideHeader({ toggle }) {
  return (
    <div>
      <div
        className={toggle ? "sidebar_active " : "sidebar"}
        role="presentation"
      >
        <Link className="linkstyle" to="/">
          <SidebarLink icon={<Dashboard />} text="Dashboard" />
        </Link>

        <div className="unique-classname4">
          <Link className="linkstyle" to="/network">
            <SidebarLink icon={<CellTower />} text="Networks" />
          </Link>
        </div>
        <div className="unique-classname5">
          <Link className="linkstyle" to="/startup">
            <SidebarLink icon={<Rocket />} text="Startups" />
          </Link>
        </div>
        <div className="unique-classname6">
          <Link className="linkstyle" to="/users">
            <SidebarLink icon={<Person />} text="Users" />
          </Link>
        </div>
        <div className="unique-classname7">
          <Link to="/mentor" className="linkstyle">
            <SidebarLink icon={<FaChalkboardTeacher />} text="Mentor" />
          </Link>
        </div>
        <Link to="/investor" className="linkstyle">
          <SidebarLink icon={<Person />} text="Investor" />
        </Link>
        <Link to="/deal" className="linkstyle">
          <SidebarLink icon={<AutoAwesomeMotion />} text="Deal" />
        </Link>
        <Link to="/focusarea">
          <SidebarLink icon={<MonetizationOnOutlined />} text="FocusArea" />
        </Link>
        <Link to="/news-article">
          <SidebarLink icon={<MonetizationOnOutlined />} text="News Article" />
        </Link>
      </div>
    </div>
  );
}
