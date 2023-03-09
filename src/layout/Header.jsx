import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper py-6 fixed top-0 left-0 border-b border-solid border-white">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 bg-black opacity-60 cursor-pointer z-[88] lg:hidden block w-full h-full"
        ></div>
      )}
      <nav className="contain justify-between items-center">
        <h2 className="text-white font-bold text-[38px]">LOGO HERE</h2>
        <div
          className={`lg:flex-row flex-col lg:p-0 pb-[3rem] overflow-y-auto lg:overflow-visible pt-[7rem] px-[3rem] flex justify-start items-center sm:items-start lg:items-center gap-6 ${
            headerToggle ? "right-0" : "-right-[600px]"
          } top-0 fixed z-[89] lg:static h-full w-full max-w-[470px] lg:w-auto lg:h-auto lg:max-w-none bg-primary-bg lg:bg-transparent transition-all duration-1000`}
        >
          <Link
            onClick={() => setHeaderToggle(false)}
            to={"/"}
            className="text-white font-normal text-lg"
          >
            Home
          </Link>
          <Link
            onClick={() => setHeaderToggle(false)}
            to={"/"}
            className="text-white font-normal text-lg"
          >
            Projects
          </Link>
          <div className="flex justify-center items-center flex-col relative">
            <button className="text-dark p-4 text-lg font-semibold bg-yellowGr rounded-lg border-none flex justify-center items-center gap-3">
              EN{" "}
              <img src="/flag.png" className="w-[37px] object-contain" alt="" />
            </button>
          </div>
          <button className="text-dark p-4 text-lg font-semibold bg-yellowGr rounded-lg border-none flex justify-center items-center gap-3">
            Connect Wallet
          </button>
          <button className="bg-transparent border border-white border-solid rounded-lg w-[76px] h-[60px] flex justify-center items-center">
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
