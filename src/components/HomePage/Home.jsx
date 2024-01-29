import NavBar from '../NavBar/NavBar'
import UpperSection from './UpperSection'
import MiddleSection from './MiddleSection'
import LowerSection from './LowerSection'



const Home = () => {
  return (
    <div className="bg-[#f2f0ec]">
        <div className='bg-Rectangle4 bg-no-repeat bg-right'>
            <div className=' h-[15rem]'>
                <NavBar/>
            </div>
            <UpperSection/>
        </div>
        <MiddleSection/>
        <LowerSection/>
    </div>
  )
}

export default Home