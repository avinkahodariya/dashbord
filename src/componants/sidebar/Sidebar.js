import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import HomeIcon from "@mui/icons-material/Home";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonIcon from "@mui/icons-material/Person";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import LinkIcon from "@mui/icons-material/Link";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const icon = [
  <HomeIcon />,
  <SubtitlesIcon />,
  <AddLocationIcon />,
  <MonetizationOnOutlinedIcon />,
  <PersonIcon />,
  <InsertChartOutlinedSharpIcon />,
  <LinkIcon />,
  <FilterAltIcon />,
];

const Sidebar = (props) => {
  const [selected, setselected] = useState("Dashboard");
  let navigate = useNavigate();

  return (
    <div style={{ position: "relative", display: "flex" }}>
      <div style={{ width: "18%", padding: "1%", background: "aliceblue" }}>
        <div className="side-button">
          <div>
            <FilterListIcon />
            Filters
          </div>{" "}
        </div>
        <div>
          {[
            "Dashboard",
            "Industry",
            "Title",
            "Location",
            "Revenue",
            "Employees",
            "Types",
            "By Company Url",
            "Exclusions",
          ].map((data, i) => {
            return (
              <div
                iconShape=""
                className={`${selected == data && "selected"} side-button`}
                onClick={() => {
                  setselected(data);
                  navigate(data.toLocaleLowerCase());
                }}
              >
                <div>
                  {icon[i]}
                  {data}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ width: "82%", padding: "1%" }}>{props.children}</div>
    </div>
  );
};

export default Sidebar;
