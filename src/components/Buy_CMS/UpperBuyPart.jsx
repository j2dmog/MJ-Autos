import KiaExterior from "../../assets/Images/KiaExterior.png"
import Group39519 from "../../assets/Images/Group 39519.svg"
import Group39477 from "../../assets/Images/Group 39477.png";
import { BuyDatas, ComprehensiveCarDetails, DescriptionDatas, GeneralInfoDatas, OverviewIconDatas } from "../../Shared/Cards/DataProducts"
import { BuyCard, CarTypesCard2, DescriptionCard, GeneralInfoCard, OverviewIconCard } from "../../Shared/Cards/CardProducts"
import RoadCar from '../../assets/Images/RoadCar.png'
import VideoCar from '../../assets/Images/VideoCar.png'
import { BrandIcons, CardDetails } from "../../Shared/Cards/Datas"
import { LogosCards, TextCards } from "../../Shared/Cards/Cards"

const UpperBuyPart = () => {
  return (
    <div>
        <div className="relative mx-[6rem] my-[4rem] ">
            <h2 className="text-[2rem] text-[#380623] font-normal">Details</h2>
            <img className="w-[72.5rem] h-[39rem] mb-[3rem] " src={KiaExterior} alt="KiaExterior" />
            <img className="absolute bottom-[36rem] left-[60rem] " src={Group39519} alt="" />
            <div className="flex gap-[3rem]">
                {BuyDatas.map((BuyData) => (<BuyCard {...BuyData}/>))}
            </div>
        </div>
        <div className="flex justify-center gap-[3rem]">
            <div className="flex flex-col gap-[3rem]">
                <div className="w-[47.6rem] h-[13.6rem] pl-[4rem] bg-white">
                    <h2 className="text-[#380623] text-[2rem] font-normal mb-[2rem]">Overview</h2>
                    <div className="flex gap-[7rem] text-[#380623] ">{OverviewIconDatas.map((OverviewIconData) => (<OverviewIconCard {...OverviewIconData}/>))}</div>
                </div>
                <div className="w-[47.6rem] h-[36.7rem] bg-white p-[2rem]">
                    <h2 className="text-[2rem] font-normal text-[#380623]">General information</h2>
                    <div className="grid grid-cols-2 gap-[2rem] w-fit m-[1rem] ">{GeneralInfoDatas.map((GeneralInfoData) => (<GeneralInfoCard {...GeneralInfoData}/>))}</div>
                </div>
            </div>
            <div className="flex flex-col w-[22.9rem] h-[53.8rem] bg-white p-[2rem]">
                {DescriptionDatas.map((DescriptionData) => (<DescriptionCard {...DescriptionData}/>))}
            </div>
        </div>
        <div>
            <div className='relative mx-[5.7rem]'>
                <img className="w-[73rem] h-[17rem] my-[3rem] " src={RoadCar} alt="RoadCar" />
                <img className="absolute bottom-[4rem] left-[20rem] w-[19rem]" src={VideoCar} alt="VideoCar" />
            </div>
            <div className='grid grid-cols-3 m-[6rem] '>
                {ComprehensiveCarDetails.map((ComprehensiveCarDetail) => (<CarTypesCard2 {...ComprehensiveCarDetail}/>))}
            </div>
            <div className='bg-white mt-[4rem]
                4xsm:hidden 3xsm:hidden
                2xsm:flex 2xsm:flex-col 2xsm:justify-center 2xsm:items-center 2xsm:w-[24rem] 2xsm:h-[20rem] 2xsm:mx-[1rem]
                xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:w-[24rem] xsm:h-[20rem] xsm:mx-[1rem]
                sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[24rem] sm:h-[20rem] sm:mx-[1rem]
                md:flex md:flex-col md:justify-center md:items-center md:w-[24rem] md:h-[20rem] md:mx-[1rem]
                lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[40rem] lg:h-[7rem] lg:mx-[10rem]
                flex flex-col justify-center items-center w-[60rem] h-[10rem]  mx-[13rem] mb-[5rem]
                '>
              <h3>POPULAR BRANDS</h3>
              <div className=' flex gap-[2rem]
              2xsm:grid grid-cols-1 2xsm:justify-center 2xsm:items-center 2xsm:gap-6
              '>
                  {
                      BrandIcons.map((BrandIcon, i) => (<LogosCards key={i} {...BrandIcon}/> ))
                  }
              </div>
          </div>
          <div>
            <div className="text-center mt-[5rem] ">
                <h3 className="text-[#380623] text-[2rem] font-normal ">Why buy from M.J.O autos ?</h3>
                <p>Peace of mind, every step of the way</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className=" 
                    4xsm:flex 4xsm:flex-col 3xsm:flex 3xsm:flex-col 2xsm:flex 2xsm:flex-col flex justify-center">
                    {CardDetails.map((CardDetail, i) => (<TextCards key={i} {...CardDetail} />))}
                </div>
                <img className="w-[6.9rem] h-[5.1rem]" src={Group39477} alt="Group39477" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpperBuyPart