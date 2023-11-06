import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { imageUrl, user } = useContext(AuthContext);
  const [isProfileOptions, setIsProfileOptions] = useState(false);
  return (
    <div className="bg-[#F0F2F5] h-full overflow-y-scroll flex-grow">
      <div className="flex w-full justify-center relative">
        <img className="rounded-full w-1/2 my-7" src={imageUrl} alt="" />
        <div className="absolute w-1/2 top-7 rounded-full bg-[rgba(84,101,111,0.8)] h-[calc(100%-56px)] flex justify-center text-[rgb(255,255,255)] opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-300">
          <div
            onClick={() => setIsProfileOptions(!isProfileOptions)}
            className="flex flex-col items-center justify-center"
          >
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
                d="M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z"
              ></path>
            </svg>
            <p className="mt-2 uppercase text-sm text-center">
              Change <br /> profile photo
            </p>
          </div>
          <div
            className={`absolute bg-white text-[#3b4a54] py-2 rounded shadow-md left-1/2 top-1/2 w-full origin-top-left transition-transform duration-300 ${
              isProfileOptions ? "scale-100" : "scale-0"
            }`}
          >
            <ul>
              <li className="pl-6 pr-12 py-2 hover:bg-[#eae6df] transition-all">
                View photo
              </li>
              <li className="pl-6 pr-12 py-2 hover:bg-[#eae6df] transition-all">
                Upload photo
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white px-8 py-4 shadow-sm flex flex-col gap-3">
        <p className="text-[#008069] text-sm">Your name</p>
        <p>{user.displayName}</p>
      </div>
      <p className="px-8 py-4 text-sm text-gray-500">
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts.
      </p>

      <div className="bg-white mb-3 px-8 py-4 shadow-sm flex flex-col gap-3">
        <p className="text-[#008069] text-sm">About</p>
        <p>MERN Stack Developer</p>
      </div>
    </div>
  );
};

export default Profile;
