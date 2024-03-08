import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";
import SignIn from "../SubComponents/SignIn";
// import Input from "../../Shared/Input_and_Button/Input";

const NavBar = () => {

  const [inputData, setInputData] = useState(false)
  
  const handleInputData = () => {
    setInputData(!inputData);
  }

  return (
    <div className=" flex justify-center gap-[30rem] py-[2rem]
    4xsm:flex 4xsm:flex-col 4xsm:justify-end 4xsm:items-end 4xsm:gap-[1rem] 4xsm:py-[1.5rem] 4xsm:mb-[8rem]
    3xsm:flex 3xsm:flex-col 3xsm:justify-end 3xsm:items-end 3xsm:gap-[1rem] 3xsm:py-[1.5rem]
    2xsm:flex 2xsm:justify-center 2xsm:gap-[4rem] 2xsm:py-[1rem]
    xsm:flex xsm:justify-center xsm:gap-[17rem] xsm:py-[1.5rem]
    sm:flex sm:justify-center sm:gap-[10rem] sm:py-[1.5rem]
    md:flex md:justify-center md:gap-[10rem] md:py-[1.5rem]
    lg:flex lg:justify-center lg:gap-[20rem] lg:py-[1.5rem]
    xl:flex xl:justify-center xl:gap-[22rem] xl:py-[1.5rem]
    ">
      <Link to='/'>
        <h1 className="xsm:ml-[1rem] ">M.J.O<sub>autos</sub></h1>
      </Link>
      <Hamburger/>
      <div className="2xsm:hidden xsm:hidden sm:flex sm:gap-[1rem]
      md:flex md:gap-[2rem] lg:flex lg:gap-[4rem] flex gap-[6.4rem]
      ">
        <Link to='/Buy' >Buy</Link>
        <Link to='/Sell' >Sell</Link>
        <Link to='/Service' >Services & Repair</Link>
        <Link to='/Contact' >Contact</Link>
        {/* <Link to='/SignIn'  className="text-center w-[6rem] h-[2rem] bg-[#802258] rounded-[2rem] ">Sign in</Link> */}
        <Link 
        onClick={handleInputData} 
         className="text-center w-[6rem] h-[2rem] bg-[#802258] rounded-[2rem]">Sign in
         </Link>
         {inputData && (<SignIn/>)}
      </div>
    </div>
  );
};

export default NavBar;
