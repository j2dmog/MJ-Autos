import Group39484 from '../../assets/Images/Homepage/Group 39484.png'
import Layer51 from '../../assets/Images/Homepage/Layer 51.png'
import Temperature from '../../assets/Images/Homepage/Temperature.png'
import Logos from '../../assets/Images/Homepage/Logos.png'
import Layer52 from '../../assets/Images/Homepage/Layer 52.png'
import Oil from '../../assets/Images/Homepage/Oil.png'

const UpperSection = () => {
  return (
    <div>
         <div className='flex relative'>
                <div className='flex flex-col gap-[4rem] w-[40rem] p-[6rem] '>
                    <div>
                        <h1>MJaay<sub>autos</sub></h1>
                        <p>Car Buying Made Easy</p>
                        <p>MJaay has the best auto deals for their customers and also the best car for you. Search by car, Compare prices and find the perfect car for you, no matter what your budget.</p>
                    </div>
                    <div className='flex gap-[2rem] '>
                        <button className='rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] '>Get started</button>
                        <button className='border-2 border-solid border-[#9d557d] rounded-[1rem] w-[12rem] h-[3.5rem] text-[#811b55] '>Explore More</button>
                    </div>
                </div>
                <div className='w-[704.35px] h-[616.66px] p-[1rem]'>
                    <img className=' w-[600px]' src={Group39484} alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-[60rem] h-[10rem] bg-white mx-[13rem] mb-[5rem] '>
                <h3>POPULAR BRANDS</h3>
                <div className='flex justify-center items-center gap-6'>
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