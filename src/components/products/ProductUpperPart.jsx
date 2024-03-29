import { ComprehensiveCarDetails, roadDatas } from '../../Shared/Cards/DataProducts'
import { CarTypesCard2, RoadCards } from '../../Shared/Cards/CardProducts'
import LeftArrow from '../../assets/Icons/LeftArrow.png'
import RightArrow from '../../assets/Icons/RightArrow.png'
import { Link } from 'react-router-dom'
import { BrandIcons, CardDetails } from '../../Shared/Cards/Datas'
import { LogosCards, TextCards } from '../../Shared/Cards/Cards'


const ProductUpperPart = () => {

  return (
    <div className=''>
        <div>
          {roadDatas.map((roadData) => (<RoadCards {...roadData}/>))}
        </div>
        <div className='grid grid-cols-3 m-[6rem] '>
            {ComprehensiveCarDetails.map((ComprehensiveCarDetail) => (<CarTypesCard2 {...ComprehensiveCarDetail}/>))}
        </div>
        <div>
          <div className='flex gap-[10rem] ml-[31rem] '>
            <Link to='/'><img src={LeftArrow} alt="LeftArrow" /></Link>
            <Link to='/Buy' ><img src={RightArrow} alt="RightArrow" /></Link>
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
       <div>
          <div className="text-center mt-[5rem] ">
            <h3 className="text-[#380623] text-[2rem] font-normal ">Why buy from M.J.O autos ?</h3>
            <p>Peace of mind, every step of the way</p>
          </div>
          <div className="
              4xsm:flex 4xsm:flex-col 3xsm:flex 3xsm:flex-col 2xsm:flex 2xsm:flex-col flex justify-center">
              {CardDetails.map((CardDetail, i) => (<TextCards key={i} {...CardDetail} />))}
          </div>
       </div>
    </div>
  )
}

export default ProductUpperPart