import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

/* eslint-disable react/prop-types */
const Header = () => {
  const { setIsLeftSideBar, leftSideBarHead } = useContext(AuthContext);
  return (
    <div className="h-1/5 bg-[#008069]">
      <div className="text-white flex h-full gap-7 items-end py-5 pl-6">
        <div className="cursor-pointer" onClick={() => setIsLeftSideBar(false)}>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            className=""
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
            ></path>
          </svg>
        </div>
        <h1 className="flex-grow text-lg font-medium">{leftSideBarHead}</h1>
      </div>
    </div>
  );
};

export default Header;
