import { FirstCard, SecondCard } from "../../Shared/Cards/SellCard"
import MovinCar from "../../assets/Images/MovingCar.png"
import Group39521 from "../../assets/Images/Group 39521.png"
import Group39520 from "../../assets/Images/Group 39520.png"
import arrow_forward from "../../assets/Icons/arrow_forward.svg"
import { FleetOfCarDatas, SellDetails, TradeDatas } from "../../Shared/Cards/Datas"
import { FleetOfCarCards, SellDetailsCard, TradeCards, TradeImageCards } from "../../Shared/Cards/Cards"
import Rectangle660 from "../../assets/Images/Rectangle 660.png"
import Rectangle661 from "../../assets/Images/Rectangle 661.png"
import Group39468 from "../../assets/Images/Group 39468.svg"
import Button from "../../Shared/Input_and_Button/Button"
import Image from '../../assets/Images/Image.png'
import Group39477 from '../../assets/Images/Group 39477.png'
import { useEffect } from "react"

const BodySell = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])

  return (
    <div>
        <img className="w-[67rem] h-[14.1rem] mx-[7rem] my-[2rem]" src={MovinCar} alt="" />
        <div className="mt-[5rem]">
            <h4 className="text-[#380623] text-center text-[1rem] font-semibold">Sell your car </h4>
            <p className="text-[#6D7D8B] text-center text-[2rem] font-normal">You're in control, choose how you want to sell your car</p>
        </div>
        <div>
            <div className="grid grid-cols-2 mx-[3rem]">
                <FirstCard/>
                <img className="w-[41.5rem] h-[34.1rem] px-[3rem]" src={Group39521} alt="Group39521" />
                <img className="w-[41.5rem] h-[34.1rem] px-[3rem]" src={Group39520} alt="Group39520" />
                <SecondCard/>
            </div>
            <div className="flex justify-center gap-[0.5rem] ">
                <p className="text-[#380623] font-semibold text-[22.4px]">See advertising price </p>
                <img className="w-[24px] h-[24px] mt-[0.5rem]" src={arrow_forward} alt="arrow_forward" />
            </div>
        </div>
        <div className='flex mt-[5rem] gap-[3rem] mx-[5rem]'>
            <div className='bg-Group39469 bg-no-repeat w-[30rem] pl-[4rem] pt-[6rem] '>
                <div className='text-[2rem] w-[13rem] '>What our customer says </div>
                <div className='w-[20rem] mt-[3rem] '>MJaay has the best auto deals for their customers and also the best car for you.</div>
            </div>
            {
                SellDetails.map((CommentDetail) => (<SellDetailsCard {...CommentDetail} />))
            }
        </div>
        <div className="relative my-[8rem]">
            <div className="flex flex-col justify-center items-center">
                <h2 className="mb-[3rem]">How to sell your car, fast</h2>
                <div className="flex w-[57rem] h-[8.9rem] gap-[15rem]">
                    {TradeDatas.map((TradeData) => (<TradeImageCards {...TradeData}/>))}
                </div>
                <div className="flex justify-center w-[67rem] h-[10.2rem] gap-[8rem]">
                    {TradeDatas.map((TradeData) => (<TradeCards {...TradeData}/>))}
                </div>
                <div className="flex gap-[24rem] h-[503px] absolute top-[5rem]">
                    <img className="h-[503px]" src={Rectangle660} alt="Rectangle660" />
                    <img className="h-[503px]" src={Rectangle661} alt="Rectangle661" />
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[15rem] gap-[2rem]">
            <h2 className="text-[2rem] font-normal">Guides to selling your car</h2>
            <div className="flex gap-[2rem]">{FleetOfCarDatas.map((FleetOfCarData) => (<FleetOfCarCards {...FleetOfCarData}/>))}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className='bg-white w-[67rem] h-[30rem] relative mt-[4rem]'>
                <div className='flex justify-center items-center gap-[3rem] '>
                    <img className='w-[25rem]' src={Image} alt="Imaged" />
                    <div className='flex flex-col pt-[6rem] '>
                        <h2 className='text-[#380623] font-normal text-[2rem] leading-[2.5rem] w-[31rem] '>Send me great Afohamsautos offers and the latest vehicle reviews.</h2>
                        <div className='flex gap-[1rem] my-[2rem]'>
                            <input className='bg-[#D9D9D9] text-[#6D7D8B] rounded-[5px] w-[26rem] h-[3.4rem] text-Start p-[1rem] ' type="text" placeholder='Enter your email ' />
                            <Button className='rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem]' Value='Subscribe'/>
                        </div>
                        <p className='text-[#6D7D8B] font-semibold text-[18px] leading-[29px] w-[35rem] h-[4.5rem] '>By signing up, you agree to receive marketing emails in accordance with our privacy notice. You can unsubscribe at any time.</p>
                    </div>
                </div>
                <img className='absolute left-[51rem] top-[18rem] ' src={Group39468} alt="" />
            </div>
            <div className="mt-[5rem]">
                <img onClick={()=> {
                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                }} 
                className="w-[6.9rem] h-[5.1rem]" src={Group39477} alt="Group39477" />
            </div>
        </div>
    </div>
  )
}

export default BodySell