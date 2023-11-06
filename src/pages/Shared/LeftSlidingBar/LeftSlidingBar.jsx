/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "./Header";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Profile from "./Profile";
import Communities from "./Communities";
import Status from "./Status";
import Newsletter from "./Newsletter";
import NewChat from "./NewChat";

const LeftSlidingBar = () => {
    const { isleftSideBar, leftSideBarHead } = useContext(AuthContext);
  return (
    <div
      className={`absolute flex flex-col w-full h-full left-0 top-0 transition-transform duration-300 ${
        isleftSideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Header leftSideBarHead={leftSideBarHead}></Header>
      {leftSideBarHead === "Profile" && <Profile></Profile>}
      {leftSideBarHead === "Communities" && <Communities></Communities>}
      {leftSideBarHead === "Status" && <Status></Status>}
      {leftSideBarHead === "Newsletter" && <Newsletter></Newsletter>}
      {leftSideBarHead === "New Chat" && <NewChat></NewChat>}
    </div>
  );
};

export default LeftSlidingBar;