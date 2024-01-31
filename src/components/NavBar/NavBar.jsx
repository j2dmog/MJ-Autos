import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const NavBar = () => {

  return (
    <div className="2xsm:flex 2xsm:justify-center 2xsm:gap-[10rem] 2xsm:py-[1.5rem]
    xsm:flex xsm:justify-center xsm:gap-[17rem] xsm:py-[1.5rem]
    sm:flex sm:justify-center sm:gap-[30rem] sm:py-[1.5rem]
    md:flex md:justify-center md:gap-[20rem] md:py-[1.5rem]
    lg:flex lg:justify-center lg:gap-[20rem] lg:py-[2rem]
    xl:flex xl:justify-center xl:gap-[10rem] xl:py-[1.5rem]
    2xl:flex 2xl:justify-center 2xl:gap-[40rem] 2xl:py-[1.5rem]
    ">
      <h1 className="xsm:ml-[1rem]">
        MJaay<sub>autos</sub>
      </h1>
      <Hamburger/>
      <div className="2xsm:hidden xsm:hidden sm:hidden
      md:flex md:gap-[2rem]
      lg:flex lg:gap-[3rem]
      xlg:flex xlg:gap-[4rem]
      ">
        <Link>Buy</Link>
        <Link>Sell</Link>
        <Link>Services & Repair</Link>
        <Link>Contact</Link>
        <Link className="text-center w-[6rem] h-[2rem] bg-[#802258] rounded-[2rem] ">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
