import {
  Dashboard,
  CellTower,
  Rocket,
  Person,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../Header/SideHeader.css";
import SidebarLink from "./SidebarLInk";

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

        <Link className="linkstyle" to="/network">
          <SidebarLink icon={<CellTower />} text="Networks" />
        </Link>
        <Link className="linkstyle" to="/startup">
          <SidebarLink icon={<Rocket />} text="Startups" />
        </Link>
        <Link to="/investor" className="linkstyle">
          <SidebarLink icon={<Person />} text="Investor" />
        </Link>
        <SidebarLink icon={<MonetizationOnOutlined />} text="Investment" />
      </div>
    </div>
  );
}
