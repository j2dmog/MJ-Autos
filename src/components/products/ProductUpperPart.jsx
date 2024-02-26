import React from 'react'
import NavBar from '../NavBar/NavBar'
import { ComprehensiveCarDetails } from '../../Shared/Cards/DataProducts'
import { CarTypesCard2 } from '../../Shared/Cards/CardProducts'
import RoadCar from '../../assets/Images/RoadCar.png'
import VideoCar from '../../assets/Images/VideoCar.png'
import Input from '../../Shared/Input_and_Button/Input'
import search from '../../assets/Icons/search_24px.png'
import LeftArrow from '../../assets/Icons/LeftArrow.png'
import RightArrow from '../../assets/Icons/RightArrow.png'


const ProductUpperPart = () => {
  return (
    <div>
        <NavBar/>
        <div className="mx-[10rem] ">
          <div className='relative'>
            <img className="w-[72rem] h-[17rem] my-[3rem] " src={RoadCar} alt="RoadCar" />
            <img className="absolute bottom-[4rem] left-[20rem] w-[19rem]" src={VideoCar} alt="VideoCar" />
          </div>
          <div className='flex gap-[3rem] '>
            <div>
              <h2 className='text-[2rem] text-center text-[#380623]'>Our Garage</h2>
              <p className='text-[1rem] text-center '>Foreign & Nigerian Used Cars </p>
            </div>
            <div className='flex gap-[1rem] w-[47.4rem] bg-[#D9D9D9] rounded-[1rem]'>
              <img className='ml-[1rem]' src={search} alt="search" />
              <Input className="bg-[#D9D9D9] w-[40rem] h-[4.4rem]" type="text" Placeholder="Search by make, model, or keyword"  />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 m-[6rem] '>
            {ComprehensiveCarDetails.map((ComprehensiveCarDetail) => (<CarTypesCard2 {...ComprehensiveCarDetail}/>))}
        </div>
        <div>
          <div className='flex gap-[10rem] ml-[31rem] my-[4rem]'>
            <img src={LeftArrow} alt="LeftArrow" />
            <img src={RightArrow} alt="RightArrow" />
          </div>
        </div>
    </div>
  )
}

export default ProductUpperPart