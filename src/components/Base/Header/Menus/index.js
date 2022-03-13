import CreateMenu from "./CreateMenu";
import NotificationMenu from "./NotificationMenu";
import ProfileMenu from "./ProfileMenu";
import "./index.css";
import CreateMenuMobile from "./CreateMenuMobile";
import { useNavigate } from "react-router-dom";
import { profileIcon } from "../../../../assets/icons";
const Menus = ({ mobile }) => {
  const navigate = useNavigate();
  const displayChanger = (none, block) => {
    document.getElementById(none).style.display = "none";
    document.getElementById(block).style.display = "block";
  };
  return (
    <div className="flex items-start gap-5">
      {mobile ? (
        <div
          style={{
            width: "100%",
            marginTop: "30px",
            paddingTop: "40px",
            borderTop: "2px solid #DDDDDD",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CreateMenuMobile />
            <div>
              <img
                onClick={() =>
                  displayChanger("toHide", "profile_options_mobile")
                }
                src={profileIcon}
                style={{ width: "70px", height: "70px", cursor: "pointer" }}
                alt=""
              />
            </div>
          </div>
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
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              Disconnect Wallet
            </p>
          </div>
        </div>
      ) : (
        <>
          <CreateMenu />
          <ProfileMenu />
          <NotificationMenu />
        </>
      )}
    </div>
  );
};

export default Menus;
