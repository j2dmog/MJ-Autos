import Button from "../Input_and_Button/Button"



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