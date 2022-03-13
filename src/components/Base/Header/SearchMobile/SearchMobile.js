import { searchIcon } from "../../../../assets/icons";
import DropDownMobile from "./DropDownMoblie";
import useOutsideAlert from "../../../../hooks/useOutsideAlert";
import cross from "../../../../assets/icons/cross-mini.svg";
import { useState } from "react";
const SearchMobile = () => {
  const { visible, setVisible } = useOutsideAlert(false);
  const displayChanger = (none, block) => {
    document.getElementById(none).style.display = "none";
    document.getElementById(block).style.display = "block";
  };
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="search_dropdown">
          <input
            value={inputValue}
            type="text"
            placeholder="Search"
            onFocus={() => setVisible(true)}
            onChange={(value) => setInputValue(value.target.value)}
          />
          <img src={searchIcon} alt="" />
          <img
            style={{
              display: `${visible ? "block" : "none"}`,
              marginLeft: "280px",
              cursor: "pointer",
            }}
            src={cross}
            alt=""
            onClick={() => {
              setVisible(false);
              setInputValue("");
            }}
          />
        </div>
      </div>
      {/* search box on mobile */}
      <div>
        {visible && (
          <div>
            {inputValue ? (
              <div
                style={{
                  width: "100%",
                  marginTop: "19px",
                  minHeight: "80vh",
                }}
              >
                <div style={{marginTop: '151px'}}>
                  <p className="mini_p_style">Nothing to show</p>
                </div>
                <div style={{marginTop: '120px', cursor: 'pointer', textDecoration: 'underline'}}>
                  <p className="mini_p_style" onClick={() => setInputValue("")}>GO BACK</p>
                </div>
              </div>
            ) : (
              <div>
                <DropDownMobile />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchMobile;
