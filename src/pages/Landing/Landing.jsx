import Logo from "../../assets/logo";
import WaDesktop from "../../assets/wa-desktop";
import QRCode from "../../assets/QRcode.jpg";
import thumbnail from "../../assets/video-thumbnail.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Landing = () => {
  const { googleSignIn } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleSignIn(googleAuthProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="L-wrapper flex flex-col items-center justify-start pb-24">
        <div className="landing-wrapper-before h-[37vh] bg-[#00A884] w-full absolute top-0 -z-10"></div>
        <div className="landing-header py-7 w-[75vw] flex items-center justify-start gap-4">
          <Logo></Logo>
          <h3 className="uppercase text-white font-medium text-sm">
            WhatsApp Web
          </h3>
        </div>
        <div className="landing-window w-[75vw] mx-auto bg-white rounded-md shadow-lg">
          <div className="p-[60px] pt-16">
            <div className="flex justify-center -mt-6">
              <div className="flex px-10 py-6 border rounded mb-8">
                <div className="flex items-center gap-6">
                  <WaDesktop></WaDesktop>
                  <div>
                    <p className="text-lg text-slate-700">
                      Download WhatsApp for Windows
                    </p>
                    <p className="text-sm text-gray-500">
                      Get calling, screen sharing and a faster experience with
                      the new Windows app.
                    </p>
                  </div>
                  <div className="flex">
                    <button className="px-6 py-2 font-medium bg-[#008069] hover:bg-[#017561] rounded-full text-white outline-0">
                      Get the app
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pb-10 mb-5 border-b">
              <div>
                <div className="landing-title text-slate-700 text-[28px] mb-6 font-light">
                  Use WhatsApp on your computer
                </div>
                <ol className="list-decimal pl-6 flex flex-col gap-4 text-lg text-gray-600">
                  <li className="leading-7">Open WhatsApp on your phone</li>
                  <li className="leading-7">
                    Go to settings by tapping on your profile photo,{" "}
                    <strong className="inline-block font-medium">
                      Menu{" "}
                      <span className="inline-block align-top">
                        <svg height="24px" viewBox="0 0 24 24" width="24px">
                          <rect
                            fill="#f2f2f2"
                            height="24"
                            rx="3"
                            width="24"
                          ></rect>
                          <path
                            d="m12 15.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.675-1.5-1.5.675-1.5 1.5-1.5zm0-2c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm0-5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z"
                            fill="#818b90"
                          ></path>
                        </svg>
                      </span>
                    </strong>
                    , or{" "}
                    <strong className="inline-block font-medium">
                      Settings{" "}
                      <span className="inline-block align-top">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <rect
                            fill="#F2F2F2"
                            width="24"
                            height="24"
                            rx="3"
                          ></rect>
                          <path
                            d="M12 18.69c-1.08 0-2.1-.25-2.99-.71L11.43 14c.24.06.4.08.56.08.92 0 1.67-.59 1.99-1.59h4.62c-.26 3.49-3.05 6.2-6.6 6.2zm-1.04-6.67c0-.57.48-1.02 1.03-1.02.57 0 1.05.45 1.05 1.02 0 .57-.47 1.03-1.05 1.03-.54.01-1.03-.46-1.03-1.03zM5.4 12c0-2.29 1.08-4.28 2.78-5.49l2.39 4.08c-.42.42-.64.91-.64 1.44 0 .52.21 1 .65 1.44l-2.44 4C6.47 16.26 5.4 14.27 5.4 12zm8.57-.49c-.33-.97-1.08-1.54-1.99-1.54-.16 0-.32.02-.57.08L9.04 5.99c.89-.44 1.89-.69 2.96-.69 3.56 0 6.36 2.72 6.59 6.21h-4.62zM12 19.8c.22 0 .42-.02.65-.04l.44.84c.08.18.25.27.47.24.21-.03.33-.17.36-.38l.14-.93c.41-.11.82-.27 1.21-.44l.69.61c.15.15.33.17.54.07.17-.1.24-.27.2-.48l-.2-.92c.35-.24.69-.52.99-.82l.86.36c.2.08.37.05.53-.14.14-.15.15-.34.03-.52l-.5-.8c.25-.35.45-.73.63-1.12l.95.05c.21.01.37-.09.44-.29.07-.2.01-.38-.16-.51l-.73-.58c.1-.4.19-.83.22-1.27l.89-.28c.2-.07.31-.22.31-.43s-.11-.35-.31-.42l-.89-.28c-.03-.44-.12-.86-.22-1.27l.73-.59c.16-.12.22-.29.16-.5-.07-.2-.23-.31-.44-.29l-.95.04c-.18-.4-.39-.77-.63-1.12l.5-.8c.12-.17.1-.36-.03-.51-.16-.18-.33-.22-.53-.14l-.86.35c-.31-.3-.65-.58-.99-.82l.2-.91c.03-.22-.03-.4-.2-.49-.18-.1-.34-.09-.48.01l-.74.66c-.39-.18-.8-.32-1.21-.43l-.14-.93a.426.426 0 00-.36-.39c-.22-.03-.39.05-.47.22l-.44.84-.43-.02h-.22c-.22 0-.42.01-.65.03l-.44-.84c-.08-.17-.25-.25-.48-.22-.2.03-.33.17-.36.39l-.13.88c-.42.12-.83.26-1.22.44l-.69-.61c-.15-.15-.33-.17-.53-.06-.18.09-.24.26-.2.49l.2.91c-.36.24-.7.52-1 .82l-.86-.35c-.19-.09-.37-.05-.52.13-.14.15-.16.34-.04.51l.5.8c-.25.35-.45.72-.64 1.12l-.94-.04c-.21-.01-.37.1-.44.3-.07.2-.02.38.16.5l.73.59c-.1.41-.19.83-.22 1.27l-.89.29c-.21.07-.31.21-.31.42 0 .22.1.36.31.43l.89.28c.03.44.1.87.22 1.27l-.73.58c-.17.12-.22.31-.16.51.07.2.23.31.44.29l.94-.05c.18.39.39.77.63 1.12l-.5.8c-.12.18-.1.37.04.52.16.18.33.22.52.14l.86-.36c.3.31.64.58.99.82l-.2.92c-.04.22.03.39.2.49.2.1.38.08.54-.07l.69-.61c.39.17.8.33 1.21.44l.13.93c.03.21.16.35.37.39.22.03.39-.06.47-.24l.44-.84c.23.02.44.04.66.04z"
                            fill="#818b90"
                          ></path>
                        </svg>
                      </span>
                    </strong>
                  </li>
                  <li className="leading-7">
                    Tap <strong className="font-medium">Linked devices</strong>{" "}
                    and then{" "}
                    <strong className="font-medium">Link a device</strong>
                  </li>
                  <li className="leading-7">
                    <span>
                      Point your phone to this screen to capture the QR code
                    </span>
                  </li>
                </ol>
              </div>
              <div className="ml-16 flex items-center justify-center">
                <img src={QRCode} alt="" />
              </div>
            </div>
            <p
              onClick={handleGoogleSignIn}
              className="text-[#008069] text-lg inline-block cursor-pointer"
            >
              Link with Google account
            </p>
          </div>

          <div className="bg-[#0b141a06] px-16 py-10">
            <h1 className="text-center mb-4 font-light text-3xl text-[#41525d]">
              Tutorial
            </h1>
            <p className="text-center text-sm text-[#008069] mb-10">
              Need help to get started?
            </p>
            <div className="flex justify-center">
              <div className="w-2/3 relative">
                <span>
                  <button
                    className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center"
                    tabIndex="0"
                    type="button"
                    aria-label="Play video"
                  >
                    <div className="flex items-center justify-center w-20 h-20 bg-[#0b141a73] rounded-full">
                      <div className="ml-1 align-top inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="34"
                          viewBox="0 0 28 34"
                        >
                          <path
                            fill="#FFF"
                            d="M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                  <img src={thumbnail} alt="" className="_2eXLG _11JPr" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
