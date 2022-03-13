import { useState } from "react";
import Header from "../components/Base/Header";
import  mainBg  from "../assets/icons/main_bg.jpg";
import WelcomeModal from "../components/Landing/WelcomeModal";

const Landing = () => {
  const [connect, setConnect] = useState(false);

  const connectTo = (account) => {
    setConnect(true);
  };

  return (
    <div>
      <Header connect={connectTo} />
      <div>
        <div
          style={{
            backgroundImage: `url("${mainBg}")`,
            backgroundSize: 'cover',
            height: '100vh',
            backgroundPosition: 'center',
          }}
        >
        </div>
        <WelcomeModal isOpen={connect} onClose={() => setConnect(false)} />
      </div>
    </div>
  );
};

export default Landing;
