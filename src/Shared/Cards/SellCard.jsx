import Check from "../../assets/Icons/Check.png"
import Button from "../Input_and_Button/Button"

export const FirstCard = () => {
    return (
        <div className="w-[29rem] h-[29rem] bg-white text-center flex flex-col justify-center items-center gap-[3rem] ml-[6rem] mt-[8rem] ">
            <div>
                <p className="font-normal text-[2rem]" >Get an instant offer</p>
                <p className="text-[#6D7D8B] text-[18px] font-semibold">Tell us more about your car to get an instant offer, valid for 7 days</p>
            </div>
            <div>
                <div className="flex gap-[1rem] ">
                    <img className="w-[24px] h-[24px]" src={Check} alt="Check" />
                    <p className="text-[18px] font-semibold text-[#6D7D8B]">Sell your car quickly for cash</p>
                </div>
                <div className="flex gap-[1rem] ">
                    <img className="w-[24px] h-[24px]" src={Check} alt="Check" />
                    <p className="text-[18px] font-semibold text-[#6D7D8B]">No haggling on your price</p>
                </div>
            </div>
            <Button Value='Get your offer' className='4xsm:w-auto 4xsm:h-auto
                rounded-[1rem] text-white bg-[#802258] 2xml:w-[10rem] 2xml:h-[2.5rem] w-[14.2rem] h-[3.5rem]'/>
        </div>
    )
}


export const SecondCard = () => {
    return (
        <div className="w-[29rem] h-[29rem] bg-white text-center flex flex-col justify-center items-center gap-[3rem] ml-[6rem]">
            <div>
                <p className="font-normal text-[2rem]" >Place an advert on Afohamsautosr</p>
                <p className="text-[#6D7D8B] text-[18px] font-semibold">3 simple steps to your advert online</p>
            </div>
            <div>
                <div className="flex gap-[1rem] ">
                    <img className="w-[24px] h-[24px]" src={Check} alt="Check" />
                    <p className="text-[18px] font-semibold text-[#6D7D8B]">Advertise to millions</p>
                </div>
                <div className="flex gap-[1rem] ">
                    <img className="w-[24px] h-[24px]" src={Check} alt="Check" />
                    <p className="text-[18px] font-semibold text-[#6D7D8B]">Free, instant online valuation</p>
                </div>
                <div className="flex gap-[1rem] ">
                    <img className="w-[24px] h-[24px]" src={Check} alt="Check" />
                    <p className="text-[18px] font-semibold text-[#6D7D8B]">Dedicated support team</p>
                </div>
            </div>
            <Button Value='Get your offer' className='4xsm:w-auto 4xsm:h-auto
                rounded-[1rem] text-white bg-[#802258] 2xml:w-[10rem] 2xml:h-[2.5rem] w-[14.2rem] h-[3.5rem] '/>
        </div>
    )
}