import { Menu, Transition } from "@headlessui/react";
import {
  arrowLeftIcon,
  ethIcon,
  maticIcon,
  profileIcon,
  usdtIcon,
} from "../../../../assets/icons";
import { useNavigate } from "react-router-dom";
import activity from "../../../../assets/icons/activity.svg";
import support from "../../../../assets/icons/support.svg";
import arrow from "../../../../assets/icons/arrow-right.svg";
import setting from "../../../../assets/icons/setting.svg";

const ProfileMenuMobile = () => {
  const navigate = useNavigate();
  const displayChanger = (none, block) => {
    document.getElementById(none).style.display = "none";
    document.getElementById(block).style.display = "block";
  };
  return (
    <div>
      <div>
        <div
          className="header_connect_wallet"
          style={{ display: "flex", justifyContent: "start" }}
        >
          <img
            onClick={() => displayChanger("profile_options_mobile", "toHide")}
            src={arrowLeftIcon}
            style={{ width: "40px", height: "40px" }}
            alt=""
          />
          <div className="profile_options_mobile_header">
            <p>0x1746f8601...dffa</p>
            <small>@CokeBoysStudio</small>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div className="profile_mobile_option">
              <img src={usdtIcon} alt="" />
              <p> {"0"} USDT</p>
            </div>
            <div className="profile_mobile_option">
              <img src={ethIcon} alt="" />
              <p> {"0"} ETH</p>
            </div>
            <div className="profile_mobile_option">
              <img src={maticIcon} alt="" />
              <p> {"0"} MATIC</p>
            </div>
          </div>
        </div>
        <div className="dd_menu_container">
          <div className="dd_menu">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={profileIcon} alt="disc_logo" />
              <p
                onClick={() => navigate("/profile")}
                className="dd_menu_p"
                style={{ marginLeft: "" }}
              >
                Profile
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
              <img src={setting} alt="disc_logo" />
              <p
                onClick={() => navigate("/profile/edit")}
                className="dd_menu_p"
                style={{ marginLeft: "" }}
              >
                Account Setting
              </p>
            </div>
            <img src={arrow} alt="" />
          </div>
          {/* <div>
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
              </div> */}
          <div
            className="diconect_mobile_btn"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
              displayChanger("profile_options_mobile", "toHide");
            }}
            style={{
              cursor: "pointer",
              marginTop: "40px",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            <p style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '30px',
              color: '#000000'
            }}>Disconnect Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileMenuMobile;
