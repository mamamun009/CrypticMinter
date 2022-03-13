import { logo } from "../../../assets/icons";
import Search from "./Search";
import Connect from "./Connect";
import Menus from "./Menus";
import { useNavigate } from "react-router-dom";
import "./index.css";
import toggler from "../../../assets/icons/Toggler.svg";
import crossToggler from "../../../assets/icons/CrossToggler.svg";
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { Transition } from "@headlessui/react";
const Header = ({ connect }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <div className="header_main_conatiner">
      <div className="header_main">
        <div className="header">
          {/* logo */}
          <div className="header_logo" onClick={() => navigate("/")}>
            <img src={logo} alt="" />
            <p className="heading_t">DUNKSWAP</p>
          </div>
          {/* Search */}
          <div className="search">
            <Search />
          </div>
          {/* Menu */}
          <div className="header_menu">
            <p onClick={() => navigate("/discover")}>Discover</p>
            <p onClick={() => navigate("/activity")}>Activity</p>
            <p onClick={() => navigate("/support")}>Support</p>
          </div>
          {/* dropdown */}
          {dropdownOpen ? (
            <img
              onClick={() => setdropdownOpen(false)}
              className="crossToggler"
              src={crossToggler}
              alt=""
            />
          ) : (
            <img
              onClick={() => setdropdownOpen(true)}
              className="togglerbtn"
              src={toggler}
              alt=""
            />
          )}
          {/* Connect or menu */}
          <div className="connect_menus">
            {localStorage.getItem("user") ? (
              <Menus mobile={false} />
            ) : (
              <Connect connect={connect} mobile={false} />
            )}
          </div>
        </div>
      </div>
      <div className="drowpdown_container_main">
        <div>
          <Transition
            show={dropdownOpen}
            // enter="transition ease-in duration-200 transform"
            // enterFrom="opacity-0 scale-100 "
            // enterTo="opacity-100 scale-100  "
            // leave="transition ease-out duration-200 transform"
            // leaveFrom="opacity-100 scale-100"
            // leaveTo="opacity-0 scale-95"
          >
            {dropdownOpen && (
              <Dropdown
                ddopen={dropdownOpen}
                connect={connect}
                connectWallet={true}
              />
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Header;
