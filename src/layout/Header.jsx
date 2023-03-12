import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToolTip from "../components/ToolTip";

const Header = ({ language, setLanguage, content }) => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="wrapper bg-primary-bg z-[50] py-6 fixed top-0 left-0 border-b border-solid border-white">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 bg-black opacity-60 cursor-pointer z-[88] lg:hidden block w-full h-full"
        ></div>
      )}
      <nav className="contain justify-between items-center">
        <Link to={"/"}>
          <h2 className="text-white  font-bold text-[38px]">LOGO HERE</h2>
        </Link>
        <div
          className={`lg:flex-row flex-col lg:p-0 pb-[3rem] overflow-y-auto lg:overflow-visible pt-[7rem] px-[3rem] flex justify-start items-center sm:items-start lg:items-center gap-6 ${
            headerToggle ? "right-0" : "-right-[600px]"
          } top-0 fixed z-[89] lg:static h-full w-full max-w-[470px] lg:w-auto lg:h-auto lg:max-w-none bg-primary-bg lg:bg-transparent transition-all duration-1000`}
        >
          <Link
            onClick={() => setHeaderToggle(false)}
            to={"/"}
            className="text-white  font-normal text-lg"
          >
            {content.link1}
          </Link>
          <Link
            onClick={() => setHeaderToggle(false)}
            to={"/"}
            className="text-white relative group   font-normal text-lg"
          >
            <ToolTip direction="bottom" />
            {content.link2}
          </Link>
          <div className="flex justify-center items-center flex-col relative">
            <button
              onClick={() => {
                if (language === "EN") {
                  setLanguage("CN");
                } else {
                  setLanguage("EN");
                }
              }}
              className="text-dark p-4 text-lg font-semibold bg-yellowGr rounded-lg border-none flex justify-center items-center gap-3"
            >
              {language === "EN" ? (
                <>
                  EN
                  <img
                    src="/flag.png"
                    className="w-[37px] object-contain"
                    alt=""
                  />
                </>
              ) : (
                <>
                  CN
                  <img
                    src="/flag2.webp"
                    className="w-[37px] object-contain"
                    alt=""
                  />
                </>
              )}
            </button>
          </div>
          <button className="text-dark relative group p-4 text-lg font-semibold bg-yellowGr rounded-lg border-none flex justify-center items-center gap-3">
            {content.connect}
            <ToolTip direction="bottom" />
          </button>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="bg-transparent border border-white border-solid rounded-lg w-[76px] h-[60px] flex justify-center items-center"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FF9F02"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FF9F02"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </div>
        {headerToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7 lg:hidden block relative z-[90] cursor-pointer"
            onClick={() => setHeaderToggle(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7 lg:hidden block relative z-[90] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </nav>
    </header>
  );
};

export default Header;
