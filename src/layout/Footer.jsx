const Footer = () => {
  return (
    <footer className="wrapper mt-[200px] border-t border-solid border-white">
      <div className="contain xl:flex-row flex-col gap-5 xl:gap-0 justify-between items-center py-4">
        <p className="text-white text-center text-sm sm:text-lg">
          Copyright © 2023 Ordinal Pad. All Rights Reserves
        </p>
        <div className="flex justify-center items-center gap-5">
          <a className="text-white text-base sm:text-lg" href="#">
            Docs
          </a>
          <a className="text-white text-base sm:text-lg" href="#">
            Blogs
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src="/twitter.png" className="w-[30px] object-contain" alt="" />
          <img src="/telegram.png" className="w-[30px] object-contain" alt="" />
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <a className="text-white text-base sm:text-lg" href="#">
            Terms & Conditions Privacy Policy
          </a>
          <a className="text-white text-base sm:-lg" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
