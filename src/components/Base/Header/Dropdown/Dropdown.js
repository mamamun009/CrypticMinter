import React from "react";
import "./Dropdown.css";
import discover from "../../../../assets/icons/discover.svg";
import activity from "../../../../assets/icons/activity.svg";
import support from "../../../../assets/icons/support.svg";
import arrow from "../../../../assets/icons/arrow-right.svg";
import discord from "../../../../assets/icons/discord.svg";
import instagramIcon from "../../../../assets/icons/instagram.svg";
import twitterIcon from "../../../../assets/icons/twitter.svg";
import { useNavigate } from "react-router-dom";
import Menus from "../Menus";
import arrowLeftIcon from "../../../../assets/icons/arrowLeftIcon.svg";
import ConnectMobile from "../ConnectMobile";
import ProfileMenuMobile from "../Menus/ProfileMenuMobile";
import SearchMobile from "../SearchMobile/SearchMobile";
function Dropdown({ connect }) {
  const navigate = useNavigate();
  const displayChanger = (none, block) => {
    document.getElementById(none).style.display = "none";
    document.getElementById(block).style.display = "block";
  };
  return (
    <div className="dd_main_container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 20px 50px 500px rgba(0, 0, 0, 0.52)",
        }}
      >
        <div
          style={{
            width: "428px",
            padding: "24px",
          }}
        >
          <div id="toHide" style={{ padding: "24px" }}>
            <SearchMobile />
            <div className="dd_menu_container">
              <div className="dd_menu">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={discover} alt="disc_logo" />
                  <p
                    onClick={() => navigate("/discover")}
                    className="dd_menu_p"
                    style={{ marginLeft: "" }}
                  >
                    Discover
                  </p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="dd_menu_container">
              <div className="dd_menu">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={activity} alt="disc_logo" />
                  <p
                    onClick={() => navigate("/activity")}
                    className="dd_menu_p"
                    style={{ marginLeft: "" }}
                  >
                    Activity
                  </p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="dd_menu_container">
              <div className="dd_menu">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={support} alt="disc_logo" />
                  <p
                    onClick={() => navigate("/support")}
                    className="dd_menu_p"
                    style={{ marginLeft: "" }}
                  >
                    Support
                  </p>
                </div>
                <img src={arrow} alt="" />
              </div>
              <div>
                {localStorage.getItem("user") ? (
                  <Menus mobile={true} />
                ) : (
                  <div
                    className="dd_btn"
                    onClick={() => displayChanger("toHide", "toShow")}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="dd_btn_p">Connect Wallet</p>
                  </div>
                )}
              </div>
            </div>
            <div className="dd_footer">
              <img src={twitterIcon} alt="" />
              <img src={discord} alt="" />
              <img src={instagramIcon} alt="" />
            </div>
          </div>
          {/* wallet_connect on mobile view */}
          
          <div id="toShow" style={{ display: "none", paddingBottom: "30px" }}>
            <div className="header_connect_wallet">
              <img
                onClick={() => displayChanger("toShow", "toHide")}
                src={arrowLeftIcon}
                alt=""
              />
              <p>Connect your walltet</p>
            </div>
            <p className="p_font">
              Choose from one of our supported wallets below.
            </p>
            <ConnectMobile connect={connect} />
          </div>
          {/* profile options on mobile view */}
          <div id="profile_options_mobile" style={{ display: "none" }}>
            <ProfileMenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
