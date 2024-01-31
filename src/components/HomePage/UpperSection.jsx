import Group39484 from '../../assets/Images/Homepage/Group 39484.png'
import Layer51 from '../../assets/Images/Homepage/Layer 51.png'
import Temperature from '../../assets/Images/Homepage/Temperature.png'
import Logos from '../../assets/Images/Homepage/Logos.png'
import Layer52 from '../../assets/Images/Homepage/Layer 52.png'
import Oil from '../../assets/Images/Homepage/Oil.png'

const UpperSection = () => {
  return (
    <div>
         <div className='2xsm:flex 2xsm:flex-col md:flex lg:flex xlg:flex relative'>
            <div className='2xsm:flex 2xsm:flex-col 2xsm:gap-[2rem] 2xsm:w-[25rem] 2xsm:p-[4rem] 
            xsm:w-[20rem] xsm:p-[2rem] 
            w-[40rem] p-[6rem] 
            '>
                <div>
                    <h1>MJaay<sub>autos</sub></h1>
                    <p>Car Buying Made Easy</p>
                    <p>MJaay has the best auto deals for their customers and also the best car for you. Search by car, Compare prices and find the perfect car for you, no matter what your budget.</p>
                </div>
                <div className='flex gap-[2rem] my-[2rem] '>
                    <button className='rounded-[1rem] text-white bg-[#802258] 2xml:w-[10rem] 2xml:h-[2.5rem] w-[10rem] h-[3.5rem] '>Get started</button>
                    <button className='border-2 border-solid border-[#9d557d] rounded-[1rem] w-[12rem] h-[3.5rem] text-[#811b55] '>Explore More</button>
                </div>
            </div>
            <div className='lg:w-[704.35px] lg:h-[616.66px] xlg:w-[704.35px] xlg:h-[616.66px] 2xlg:w-[704.35px] 2xlg:h-[616.66px] p-[1rem]'>
                <img className='2xsm:w-[25rem]' src={Group39484} alt="" />
            </div>
        </div>
        <div className='bg-white 2xsm:flex 2xsm:flex-col 2xsm:justify-center 2xsm:items-center 2xsm:w-[24rem] 2xsm:h-[20rem] 2xsm:mx-[1rem]
        xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:w-[24rem] xsm:h-[20rem] xsm:mx-[1rem]
        sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[24rem] sm:h-[20rem] sm:mx-[1rem]
        md:flex md:flex-col md:justify-center md:items-center md:w-[24rem] md:h-[20rem] md:mx-[1rem]
        lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[40rem] lg:h-[7rem] lg:mx-[10rem]
        // flex flex-col justify-center items-center w-[60rem] h-[10rem]  mx-[13rem] mb-[5rem]
        '>
            <h3>POPULAR BRANDS</h3>
            <div className=' flex 
            2xsm:grid grid-cols-3 2xsm:justify-center 2xsm:items-center 2xsm:gap-6
            '>
                <img src={Layer51} alt="Layer51" />
                <img src={Temperature} alt="Temperature" />
                <img src={Logos} alt="Logos" />
                <img src={Layer52} alt="Layer52" />
                <img src={Oil} alt="Layer52" />
            </div>
        </div>
    </div>
  )
}

export default UpperSection