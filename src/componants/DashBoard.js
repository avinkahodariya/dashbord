import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import AddIcon from "@mui/icons-material/Add";
import PaginatedItems from "./Table/Paginate";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import SearchBox from "./CommanCompo/SearchBox";
import IndexData from "./Table";
import DropDown from "./CommanCompo/DropDown";
const DashBoard = () => {
  const [firstHeader, setfirstHeader] = useState("");
  const [data, setdataselection] = useState("");
  const [save, setsave] = useState("");
  const [tab, setTab] = useState("");
  const [drop, setDrop] = useState("");
  const dataselection = (data) => {
    console.log("data", data);
    setdataselection(data);
  };

  const saveSerch = (data) => {
    let newsave = save || JSON.parse(localStorage.getItem("search")) || [];
    newsave.push(data);
    localStorage.setItem("search", JSON.stringify(newsave));
    setsave(newsave);
  };

  const addtolist = () => {
    console.log("aaaaaaaaa", data);
    localStorage.setItem("mylist", JSON.stringify(data));
    NotificationManager.success("Data Adeed to My List ");
  };

  const serchdrop = (d) => {
    setDrop(d);
  };

  return (
    <div>
      <div className="sidediv ">
        <div className="header-row-wrapper">
          <div className="header-button-wrapper">
            <div type="button" class="btn w-16 hover-bk ">
              <HomeIcon />
              Home
            </div>
            <div type="button" class="btn w-16 hover-bk">
              <DropDown className={"hover-page"}>
                <PermContactCalendarIcon /> Contact Search
              </DropDown>
            </div>
            <div type="button" class="btn w-16 hover-bk">
              <DropDown
                list={data}
                className={"hover-page"}
                style={{ width: "150px", textAlign: "center" }}
              >
                {" "}
                <FormatListBulletedIcon /> My List{" "}
              </DropDown>
            </div>
            {tab !== "lookup" ? (
              <div
                type="button"
                class="btn w-16 hover-bk"
                onClick={() => {
                  setTab("lookup");
                }}
              >
                <SearchIcon /> Look Up
              </div>
            ) : (
              <>
                {" "}
                <SearchBox
                  placholder={"look up"}
                  width={"8%"}
                  className="togle-search"
                  serchdrop={serchdrop}
                />
              </>
              // <TextField
              //   id="standard-textarea"
              //   label="Look Up"
              //   placeholder="Look up"
              //   multiline
              //   variant="standard"
              // />
            )}
            <div
              type="button"
              class="btn w-16 hover-bk"
              onClick={() => {
                NotificationManager.success("Verified ");
              }}
            >
              <CheckCircleOutlineOutlinedIcon /> Verify
            </div>
            <div type="button" class="btn w-16 hover-bk">
              <DropDown
                className={"hover-page"}
                list={["My Profile", "Log Out"]}
                style={{ width: "150px", textAlign: "center " }}
              >
                <AccountCircleIcon /> Hey , John{" "}
              </DropDown>
            </div>
          </div>
          <div className="second-row">
            <div style={{ display: "flex", gap: "20px", width: "15%" }}>
              <div class=" ">
                <DropDown
                  list={[<SplitscreenIcon />, <VerticalSplitIcon />]}
                  className={"hover-page"}
                >
                  {" "}
                  <SplitscreenIcon />
                </DropDown>
              </div>
              <div class="">
                <DropDown list={["Row", "Vertivcal"]} className={"hover-page"}>
                  Display
                </DropDown>
              </div>
            </div>
            <div className="round-border-wrapper ">
              <div
                class="btn btn-outline-danger text-red mui-button hover  "
                onClick={() => {
                  setTab("");
                }}
              >
                <CancelOutlinedIcon />
                Clear Search
              </div>
              <div class="btn btn-outline-primary mui-button text-blue hover">
                {" "}
                <DoneAllOutlinedIcon /> Save Search
              </div>
              <div
                class="btn btn-outline-dark mui-button hover"
                onClick={addtolist}
              >
                <AddIcon />
                Add To My Lists
              </div>
              <div class="btn btn-outline-primary mui-button bk-blue font-white download">
                <DropDown
                  list={["PDF", "Exel", "CSV"]}
                  style={{
                    width: "110px",
                    textAlign: "center",
                    fill: "white",
                  }}
                  className="hover-page "
                >
                  {" "}
                  <span className="hover font-white " style={{ fill: "white" }}>
                    Download
                  </span>
                </DropDown>
              </div>
            </div>
            <PaginatedItems itemsPerPage={10} />
          </div>
        </div>
        <div className="p-3">
          <IndexData dataselection={dataselection} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
