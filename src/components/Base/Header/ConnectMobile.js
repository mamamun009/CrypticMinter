import { coinbaseIcon, metaMaskIcon, rainbowIcon } from "../../../assets/icons";
import Icon from "../../Utils/Icon";
import "./ConnectMobile.css";
import arrow from "../../../assets/icons/arrow-right.svg";
const ConnectMobile = ({ connect }) => {
  return (
    <div className="wallet_mobile_main">
      <div
        className="wallet_options"
        onClick={() => {
          connect?.({
            account: "rainbow",
          });
        }}
      >
        <div className="wallet_option">
          <Icon icon={rainbowIcon} />
          <p>Rainbow</p>
        </div>
        <img src={arrow} alt="" />
      </div>
      <div
        className="wallet_options"
        onClick={() => {
          connect?.({
            account: "coinbase",
          });
        }}
      >
        <div className="wallet_option">
          <Icon icon={coinbaseIcon} />
          <p>Coinbase</p>
        </div>
        <img src={arrow} alt="" />
      </div>
      <div
        className="wallet_options"
        onClick={() => {
          connect?.({
            account: "metamask",
          });
        }}
      >
        <div className="wallet_option">
          <Icon icon={metaMaskIcon} />
          <p>Metamask</p>
        </div>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ConnectMobile;
