import React from 'react'
import { Link } from 'react-router-dom'

const CompanyFeatures = () => {
  return (
    <div className="2xsm:flex 2xsm:flex-col 2xsm:gap-[0.2rem] 2xsm:items-start z-10
    xsm:flex xsm:flex-col xsm:gap-[0.2rem] xsm:items-start
    sm:flex sm:flex-col sm:gap-[0.2rem] sm:items-start
    md:flex md:flex-col md:gap-[0.2rem] md:items-start
    lg:flex lg:gap-10
    xl:flex xl:gap-[0.2rem] xl:items-start
    2xl:flex 2xl:gap-[0.2rem] 2xl:items-start
    ">
        <Link>Buy</Link>
        <Link>Sell</Link>
        <Link>Services & Repair</Link>
        <Link>Contact</Link>
        {/* <Link className="text-center w-[6rem] h-[2rem] bg-[#802258] rounded-[2rem] ">Sign in</Link> */}
    </div>
  )
}

export default CompanyFeatures