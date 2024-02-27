import Button from "../Input_and_Button/Button"
import Input from "../Input_and_Button/Input"



export const CarTypesCard2 = ({Image1,BrandType,CarType,Distance,CarPrice}) => {
    return (
        <div>
            <div className='w-[23rem] h-[27.6rem] bg-white p-[2rem] '>
                <img src={Image1} alt="Image1" />
                <p>{BrandType}</p>
                <div className='grid grid-cols-2 '>
                    <div className='w-[7.4rem] h-[1.7rem] bg-[#d9d9d9] rounded-[0.2rem] p-1 mt-6 '>{CarType}</div>
                    <div className='w-[7.4rem] h-[1.7rem] bg-[#d9d9d9] rounded-[0.2rem] p-1 mt-6 '>{Distance}</div>
                    <div className='w-[7.4rem] h-[1.7rem] bg-[#d9d9d9] rounded-[0.2rem] p-1 mt-6 '>{CarPrice}</div>
                </div>
            </div>
            <Button className='m-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem]' Value="Read more"/>
        </div>
    )
}

export const BuyCard = ({kia}) => {
    return (
        <div>
            <img className="w-[12.1rem] h-[11rem] " src={kia} alt="kia" />
        </div>
    )
}

export const RoadCards = ({RoadCar, VideoCar, search, text1, text2}) => {
    return (
        <div className="mx-[10rem] ">
            <div className='relative'>
                <img className="w-[72rem] h-[17rem] my-[3rem] " src={RoadCar} alt="RoadCar" />
                <img className="absolute bottom-[4rem] left-[20rem] w-[19rem]" src={VideoCar} alt="VideoCar" />
            </div>
            <div className='flex gap-[3rem] '>
                <div>
                    <h2 className='text-[2rem] text-center text-[#380623]'>{text1}</h2>
                    <p className='text-[1rem] text-center '>{text2}</p>
                </div>
                <div className='flex gap-[1rem] w-[47.4rem] bg-[#D9D9D9] rounded-[1rem]'>
                    <img className='ml-[1rem]' src={search} alt="search" />
                    <Input className="bg-[#D9D9D9] w-[40rem] h-[4.4rem]" type="text" Placeholder="Search by make, model, or keyword"  />
                </div>
            </div>
        </div>
    )
}

export const OverviewIconCard = ({Brand, type}) => {
    return (
        <div>
            <img className="w-[4.5rem] h-[4rem] " src={Brand} alt="kia" />
            <h4 className="text-center text-[1rem]  ">{type}</h4>
        </div>
    )
}

export const GeneralInfoCard = ({Property, type}) => {
    return (
        <div className="w-fit">
            <h4 className="font-extrabold text-[#380623]">{Property}<br /><span className="text-[1rem] text-gray-700 font-normal ">{type}</span></h4>
        </div>
    )
}

export const DescriptionCard = ({Describe, span1, span2, span3, span4}) => {
    return (
        <div>
            <h2 className="font-normal text-[2rem] text-[#380623] text-start">{Describe}</h2>
            <p className="w-[17.4rem] h-[7.3rem] text-[1rem] text-[#6D7D8B] mt-[2rem]">
                <span>{span1}</span> <br />
                <span>{span2}</span> <br /> 
                <span>{span3}</span> <br />
                <span>{span4}</span>
            </p>
            <div className=' pt-[2rem]
                4xsm:flex 4xsm:gap-[10px] 4xsm:flex-col
                flex flex-col gap-[2rem] '>
                    <Button Value='Message' className='
                    4xsm:w-auto 4xsm:h-auto
                    rounded-[1rem] text-white bg-[#802258] 2xml:w-[10rem] 2xml:h-[2.5rem] w-[12rem] h-[3.5rem] '/>
                    {/* <Link to='/ProductHomePage'> */}
                        <Button Value='Book inspection' className='
                        4xsm:w-auto 4xsm:h-auto
                        border-2 border-solid border-[#9d557d] rounded-[1rem] w-[12rem] h-[3.5rem] text-[#811b55] '/>
                    {/* </Link> */}
                </div>
        </div>
    )
}
