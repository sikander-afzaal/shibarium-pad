const Footer = ({ content }) => {
  return (
    <footer className="wrapper  border-t border-solid border-text dark:border-white">
      <div className="contain xl:flex-row flex-col gap-5 xl:gap-0 justify-between items-center py-4">
        <p className="dark:text-white text-black text-center text-sm sm:text-lg">
          {content.copyright}
        </p>
        <div className="flex justify-center items-center gap-5">
          <a
            className="dark:text-white text-black text-base sm:text-lg"
            href="#"
          >
            {content.link1}
          </a>
          <a
            className="dark:text-white text-black text-base sm:text-lg"
            href="#"
          >
            {content.link2}
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            src="/twitter.png"
            className="dark:invert-0 invert w-[30px] object-contain"
            alt=""
          />
          <img
            src="/telegram.png"
            className="dark:invert-0 invert w-[30px] object-contain"
            alt=""
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <a
            className="dark:text-white text-black text-base sm:text-lg"
            href="#"
          >
            {content.link3}
          </a>
          <a className="dark:text-white text-black text-base sm:-lg" href="#">
            {content.link4}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
