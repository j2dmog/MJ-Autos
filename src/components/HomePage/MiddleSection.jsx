import Group39525 from "../../assets/Images/Group 39525.png";
import Rectangle8 from "../../assets/Images/Rectangle 8.png";
import MaskGroup3 from "../../assets/Images/MaskGroup3.png";
import MaskGroup6 from "../../assets/Images/MaskGroup6.png";
import vid from "../../assets/Images/Video.png";
import MaskGroupExtra from "../../assets/Images/MaskGroupExtra.png";
import Group39526 from "../../assets/Images/Group 39526.png";
import { ImageCards, TextCards } from "../../Shared/Cards/Cards";
import { CardDetails, Getters } from "../../Shared/Cards/Datas";
import Button from "../../Shared/Input_and_Button/Button";

const MiddleSection = () => {
  return (
    <div
      className="relative z-10
                    4xsm:mt-[20rem]
                    3xsm:mt-[20rem] 
                    2xsm:mt-[20rem] 
                    xsm:mt-[20rem] 
                    sm:mt-[20rem] 
                    md:mb-[15rem]">
      <div
        className=" 
                4xsm:flex 4xsm:flex-col
                3xsm:flex 3xsm:flex-col
                2xsm:flex 2xsm:flex-col
                xsm:flex xsm:flex-col
                sm:flex sm:flex-col
                md:flex md:flex-col
                flex">
        <img className="4xsm:hidden 3xsm:hidden w-[40rem] h-[35rem] " src={Group39525} alt="Group39469"/>
        <div className=" ">
          <h2 className="4xsm:text-[1.3rem] align-center font-bold text-[3rem] font-mulish text-[#380623] "> About us </h2>
          <p className="4xsm:w-auto 3xsm:w-auto 2xsm:w-auto w-[29rem] h-[7.4rem] my-[2rem] ">M.J.O<sub>autos</sub> has the best auto deals for their customers and also the best car for you. Search by car, Compare prices and find the perfect car for you, no matter what your budget. </p>
          <div>
            <Button className="4xsm:w-auto 3xsm:w-auto 2xsm:w-auto my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] " Value="Contact us"/>
            <img className="w-[29rem] h-[6rem] " src={Rectangle8} alt="Rectangle8"/>
          </div>
        </div>
      </div>
      <div className="text-center mt-[5rem] ">
        <h3 className="text-[#380623] text-[2rem] font-normal ">Why buy from M.J.O autos ?</h3>
        <p>Peace of mind, every step of the way</p>
      </div>
      <div className="
      4xsm:flex 4xsm:flex-col 3xsm:flex 3xsm:flex-col 2xsm:flex 2xsm:flex-col flex justify-center">
        {CardDetails.map((CardDetail, i) => (<TextCards key={i} {...CardDetail} />))}
      </div>
      <div>
        <div className="
                4xsm:w-auto 4xsm:ml-0 4xsm:text-center 4xsm:my-[3rem]
                3xsm:auto 3xsm:ml-0 3xsm:text-center 3xsm:my-[3rem]
                2xsm:w-auto 2xsm:ml-0 2xsm:text-center 2xsm:my-[15rem]
                xsm:w-auto xsm:ml-0 xsm:text-center xsm:my-[3rem]
                sm:auto sm:ml-0 sm:text-center sm:my-[3rem]
                mt-[8rem] ml-[28rem] w-[45rem]">
          M.J.O has the best auto deals for their customers and also the best car for you.
        </div>
        <div className="flex px-[5rem]">
          <div className="grid grid-cols-2 ">
            {Getters.map((Getter, i) => (<ImageCards key={i} {...Getter} />))}
          </div>
          <div>
            <img className="w-[40rem] h-[25rem] my-[2rem] " src={MaskGroup3} alt="MaskGroup3"/>
            <img className="w-[40rem] h-[8rem]" src={MaskGroup6} alt="MaskGroup6"/>
          </div>
        </div>
      </div>
      <div className="w-[72rem]">
        <div className="flex gap-[19rem]">
          <Button className="ml-[10rem] my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem]" Value="Buy Now"/>
          <p className="w-[23rem] h-[4rem] my-10 ">M.J.O has the best auto deals for their <br /> customers and also the best car for you.</p>
        </div>
        <div className="flex ml-[10rem]">
          <div className="mt-[5rem] ">
            <p className="w-[27.5rem] h-[6rem] pt-5 text-[1.5rem] ">Get a free, instant valuation so you know exactly how much you can put towards your next car.</p>
            <img className="w-[26rem] h-[25.6rem] " src={MaskGroupExtra} alt="MaskGroupExtra"/>
          </div>
          <div>
            <img className="w-[30rem] h-[28.5rem]" src={Group39526} alt="Group39526"/>
            <button className="my-[2rem] ml-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] ">Value my car</button>
          </div>
        </div>
        <div className="flex mx-[7rem] relative">
          <div className="">
            <div className="w-[35.1rem] h-[16.8rem] bg-white mx-[2rem] "></div>
            <div className="w-[28.6rem] h-[8rem] my-[1rem] ">
              <h5 className="text-[1rem] font-extrabold leading-[1.255rem] text-[#380623] ">Save time researching</h5>
              <div className="text-[#6D7D8B] ">Narrow down your options with help from our experts.<br />They review all makes and models to help you find the<br />right car.</div>
              <Button className="my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] " Value="Value my car" />
            </div>
          </div>
          <div className="flex flex-col bg-Rectangle28 w-[35.4rem] h-[34.5rem] absolute left-[25rem] top-[4rem] ">
            <h2>Watch our latest reviews on YouTube</h2>
            <img className="w-[19.4rem] h-[11rem] m-[10rem] " src={vid} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
