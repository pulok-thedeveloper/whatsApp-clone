import Sidebar from "../pages/Shared/Sidebar";
import GetTheApp from "../pages/GetTheApp/GetTheApp";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import Chats from "../pages/Chats/Chats";
import RightSlidingBar from "../pages/Shared/RightSlidingBar/RightSlidingBar";

const Main = () => {
  const { isChatClicked } = useContext(AuthContext);
  return (
    <div className="flex bg-[#F0F2F5] relative overflow-hidden">
      <Sidebar></Sidebar>
      {isChatClicked ? <Chats></Chats> : <GetTheApp></GetTheApp>}
      <RightSlidingBar></RightSlidingBar>
    </div>
  );
};

export default Main;
