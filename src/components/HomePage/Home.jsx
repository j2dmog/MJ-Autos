import NavBar from '../NavBar/NavBar'
import UpperSection from './UpperSection'
import MiddleSection from './MiddleSection'
import LowerSection from './LowerSection'
import Footer from '../Footer/Footer'
import bg_Rectangle4 from '../../assets/Images/Rectangle4.png'




const Home = () => {
  return (
    // <div className="bg-[#f2f0ec]
    //       ">
    <div className='
         '>
         <div className='relative z-10  top-0
              
              4xsm:bg-[0.5rem] 4xsm:bg-cover 4xsm:h-[38rem]
              3xsm:bg-[1rem] 3xsm:bg-cover 3xsm:h-[38rem]
              2xsm:bg-[8rem] 2xsm:bg-cover 2xsm:h-[38rem]
              xsm:bg-[2rem] xsm:bg-cover xsm:h-[75rem] 
              sm:bg-[13rem] sm:bg-cover sm:h-[75rem]
              md:bg-[22rem] md:bg-contain md:h-[75rem]
              lg:bg-[35rem] lg:bg-contain lg:h-[70rem]
              xl:bg-[35rem] xl:bg-contain
              bg-contain h-[85rem]
                
              '>
            <div className='4xsm:h-[3rem] 3xsm:h-[3rem] 2xsm:h-[3rem] xsm:h-[10rem] md:h-[12rem] lg:h-[15rem] w-auto xlg:h-[17rem] 2xlg:h-[22rem]'>
                <NavBar/>
            </div>
            <UpperSection/>
        </div>
        <img src={bg_Rectangle4} alt="bg_Rectangle4" className='
        absolute left-[34.5rem] top-0 w-[49.6rem] h-[70rem]
        md:w-[30rem] md:h-[70rem] md:left-[29.5rem]
        lg:w-auto lg:h-[70rem] lg:left-[32rem]
        ' />
        <div className=''>
          <MiddleSection/>
          <LowerSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home