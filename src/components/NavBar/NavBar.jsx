// import { useState } from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
    // const [hambuger, setHambuger] = useState(false)

    // function Toggle() {
    //     setHambuger(!hambuger)
    // }

  return (
    <div className="xsm:flex xsm:justify-around xsm:p-[4rem] ">
        <h1>MJaay<sub>autos</sub></h1>
            {/* <button onClick={Toggle} class="relative group">
                <div class="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div class="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                    <div class="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                    <div class="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                </div>
                </div>
            </button> */}
        <div className="xsm:flex gap-[5rem] z-10 ">
            <Link>Buy</Link>
            <Link>Sell</Link>
            <Link>Services & Repair</Link>
            <Link>Contact</Link>
            <Link className="text-center w-[6rem] h-[2rem] bg-[#802258] rounded-[2rem] ">Sign in</Link>
        </div>
    </div>
  )
}

export default NavBar