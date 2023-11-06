import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const RightSlidingBar = () => {
    const { isRightSideBar, setIsRightSideBar, selectedContact } =
      useContext(AuthContext);
    return (
      <div
        className={`h-screen w-2/5 lg:w-[30%] border-l border-[#E9EDEF] transition-transform duration-300 ${
          isRightSideBar ? "translate-x-0" : "absolute right-0 translate-x-full"
        }`}
      >
        <header className="bg-[#f0f2f5] px-4 py-[10px] border-r border-[#d1d7db] flex items-center gap-5">
          <span
            className="w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setIsRightSideBar(false)}
          >
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="currentColor"
              enableBackground="new 0 0 24 24"
            >
              <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
            </svg>
          </span>
          <span>Contact info</span>
        </header>
        <div>
          <div className="flex flex-col items-center py-7 mb-3 bg-white">
            <img
              className="w-1/2 rounded-full"
              src={selectedContact?.image}
              alt="User's Profile"
            />
            <h3 className="text-2xl">{selectedContact?.name}</h3>
            <p className="mt-1 text-[#3b4a54]">{selectedContact?.phone}</p>
          </div>
          <div className="bg-white mb-3 px-8 py-4 shadow-sm flex flex-col gap-3">
            <p className="text-[#008069] text-sm">About</p>
            <p>{selectedContact?.about}</p>
          </div>
        </div>
      </div>
    );
};

export default RightSlidingBar;