import NavBar from '../NavBar/NavBar'
import UpperSection from './UpperSection'
import MiddleSection from './MiddleSection'
import LowerSection from './LowerSection'
import Footer from '../Footer/Footer'



const Home = () => {
  return (
    <div className="bg-[#f2f0ec]">
        <div className='bg-Rectangle4 bg-no-repeat bg-right bg-auto h-auto xsm:h-full
        2xsm:bg-[2px]
        xsm:bg-[6rem] 
        sm:bg-[12rem] 
        md:bg-[15rem] 
        lg:bg-[15rem] 
        xlg:bg-[20rem] 
        2xlg:bg-[25rem] 
         '>
            <div className=' 2xsm:h-[3rem] xsm:h-[10rem] sm:h-[12rem] md:h-[12rem] lg:h-[15rem] xlg:h-[17rem] 2xlg:h-[22rem]'>
                <NavBar/>
            </div>
            <UpperSection/>
        </div>
        <div>
          <MiddleSection/>
          <LowerSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home