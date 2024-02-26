import Group39484 from '../../assets/Images/Group 39484.png'
import { BrandIcons, TextDetails } from '../../Shared/Cards/Datas'
import { CodeDetails, LogosCards } from '../../Shared/Cards/Cards'
import Button from '../../Shared/Input_and_Button/Button'

const UpperSection = () => {
  return (
    <div>
         <div className=' flex relative h-[35rem] 
         4xsm:flex 4xsm:flex-col 4xsm:py-[10rem] 4xsm:px-[0.5rem]
         3xsm:flex 3xsm:flex-col 3xsm:py-[10rem] 3xsm:px-[1rem]
         2xsm:flex 2xsm:flex-col 2xsm:py-[10rem] 2xsm:px-[3rem]
         xsm:flex xsm:flex-col xsm:py-[10rem] xsm:px-[6rem]
         sm:flex sm:py-[10rem] sm:px-[0.5rem]
         md:flex md:py-[1rem] md:px-[3rem]
         lg:flex lg:py-[0.1rem] lg:px-[6rem] l
         xl:flex xl:py-[3rem] xl:px-[6rem] 
         2xl:flex 2xl:py-[10rem] 2x:pxl-[6rem] 
         '>
            <div className='
            4xsm:flex 4xsm:flex-col 4xsm:gap-[2rem] 4xsm:w-[5rem] 4xsm:p-[2px] 
            3xsm:flex 3xsm:flex-col 3xsm:gap-[2rem] 3xsm:w-[5rem] 3xsm:p-[2px] 
            2xsm:flex 2xsm:flex-col 2xsm:gap-[2rem] 2xsm:w-[10rem] 2xsm:p-[4px] 
            xsm:w-[20rem] xsm:p-[2rem]
            sm:w-[20rem] sm:p-[1rem]
            py-[4rem]
            w-[40rem] 
            '>
                {
                    TextDetails.map((TextDetail) => (<CodeDetails {...TextDetail}/>))
                }
                <div className=' pt-[7rem]
                4xsm:flex 4xsm:gap-[10px] 4xsm:flex-col
                flex gap-[2rem] my-[2rem] '>
                    <Button Value='Get started' className='
                    4xsm:w-auto 4xsm:h-auto
                    rounded-[1rem] text-white bg-[#802258] 2xml:w-[10rem] 2xml:h-[2.5rem] w-[10rem] h-[3.5rem] '/>
                    <Button Value='Explore More' className='
                    4xsm:w-auto 4xsm:h-auto
                    border-2 border-solid border-[#9d557d] rounded-[1rem] w-[12rem] h-[3.5rem] text-[#811b55] '/>
                </div>
            </div>
            <div className='md:w-[600px] lg:w-[50rem] lg:h-[616.66px] xlg:w-[50rem] xlg:h-[616.66px] 2xlg:w-[704.35px] 2xlg:h-[616.66px]'>
                <img className='4xsm:hidden 3xsm:hidden 2xsm:w-[25rem] lg:w-[45rem] ' src={Group39484} alt="Group39484" />
            </div>
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
    </div>
  )
}

export default UpperSection