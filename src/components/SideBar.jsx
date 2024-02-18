import SocialNetwork from "./SocialNetwork";

import Avatar from "../img/foto-perfil.png";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const SideBar = () => {
  return (
    <>
      <aside id="sidebar">
        <img src={Avatar} alt="Welington da Silva" />
        <p className="title">Dev FullStack</p>
        <SocialNetwork />
        <InformationContainer />
        <a href="" className="btn">
          Download curriculo
        </a>
      </aside>
      ;
    </>
  );
};

export default SideBar;
