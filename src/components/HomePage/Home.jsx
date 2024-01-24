import NavBar from '../NavBar/NavBar'
// import Rectangle4 from '../../assets/Images/Homepage/Rectangle4.png'
import Group39484 from '../../assets/Images/Homepage/Group 39484.png'
import Layer51 from '../../assets/Images/Homepage/Layer 51.png'
import Temperature from '../../assets/Images/Homepage/Temperature.png'
import Logos from '../../assets/Images/Homepage/Logos.png'
import Layer52 from '../../assets/Images/Homepage/Layer 52.png'
import Oil from '../../assets/Images/Homepage/Oil.png'
import Group39525 from '../../assets/Images/Homepage/Group 39525.png'
import Rectangle8 from '../../assets/Images/Homepage/Rectangle 8.png'
import undraw_by_my_car_ttge from '../../assets/Images/Homepage/undraw_by_my_car_ttge.png'
import undraw_by_my_car_ttger_reciprocate from '../../assets/Images/Homepage/undraw_by_my_car_ttger_reciprocate.png'
import undraw_vehicle_sale_a645 from '../../assets/Images/Homepage/undraw_vehicle_sale_a645.png'
import MaskGroup1 from '../../assets/Images/Homepage/MaskGroup1.png'
import MaskGroup2 from '../../assets/Images/Homepage/MaskGroup2.png'
import MaskGroup3 from '../../assets/Images/Homepage/MaskGroup3.png'
import MaskGroup4 from '../../assets/Images/Homepage/MaskGroup4.png'
import MaskGroup5 from '../../assets/Images/Homepage/MaskGroup5.png'
import MaskGroup6 from '../../assets/Images/Homepage/MaskGroup6.png'

const Home = () => {
  return (
    <div className="h-screen bg-[#f2f0ec]">
        <div>
            <div className=' h-[15rem] bg-[#f2f0ec]'>
                <NavBar/>
                {/* <img className='h-[80rem] absolute top-0 right-0' src={Rectangle4} alt="" /> */}
            </div>
            <div className='flex relative bg-[#f2f0ec]'>
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
            <div className='flex flex-col justify-center items-center '>
                <h3>POPULAR BRANDS</h3>
                <div className='flex justify-center items-center gap-6'>
                    <img src={Layer51} alt="Layer51" />
                    <img src={Temperature} alt="Temperature" />
                    <img src={Logos} alt="Logos" />
                    <img src={Layer52} alt="Layer52" />
                    <img src={Oil} alt="Layer52" />
                </div>
            </div>
            <div>
                <div className="flex">
                    <img className='w-[46rem] h-[35rem] ' src={Group39525} alt="Group39469" />
                    <div>
                        <h2 className='align-center font-bold text-[3rem] font-mulish text-[#380623] '>About us</h2>
                        <p className='w-[29rem] h-[7.4rem] my-[2rem] '>K.R.k has the best auto deals for their customers and also the best car for you. Search by car, Compare prices and find the perfect car for you, no matter what your budget.</p>
                        <div>
                            <button className='my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] '>Contact us</button>
                            <img className='w-[29rem] h-[6rem] ' src={Rectangle8} alt="Rectangle8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='text-center '>
                <h3 className='text-[#380623]  '>Why buy from K.R.K auto ? </h3>
                <p>Peace of mind, every step of the way</p>
            </div>
            <div className='flex justify-center'>
                <div className='w-[24rem] h-[27.5rem] p-6 '>
                    <div>
                        <h3>Pay the right price</h3>
                        <p>We make it easy for you to find a great deal by showing you how the price compares to similar cars on the market.</p>
                    </div>
                    <img className='w-[18rem] h-[13rem] ' src={undraw_by_my_car_ttge} alt="" />
                </div>
                <div className='w-[24rem] h-[27.5rem] p-6 bg-[#bbc8d4] '>
                    <div>
                        <h3>Free history checks</h3>
                        <p>Every car has passed a free basic history check. We’ll never advertise a car that’s recorded as stolen, scrapped or written off beyond repair..</p>
                    </div>
                    <img className='w-[23rem] h-[12.1rem]' src={undraw_vehicle_sale_a645} alt="" />
                </div>
                <div className='w-[24rem] h-[27.5rem] p-6 bg-[#dae3ea] '>
                    <div>
                        <h3>Sellers you can trust</h3>
                        <p>Read dealer reviews from like-minded car buyers so you can feel confident you’re buying from someone you trust.</p>
                    </div>
                    <img className='w-[18rem] h-[13rem]' src={undraw_by_my_car_ttger_reciprocate} alt="" />
                </div>
            </div>
            <div className='flex  px-[5rem] '>
                <div className='flex'>
                    <div>
                        <img className='w-[15rem] h-[16rem] my-[1rem] ml-[1rem] ' src={MaskGroup1} alt="MaskGroup1"/>
                        <img className='w-[15rem] h-[16rem] my-[1rem] ml-[1rem] ' src={MaskGroup4} alt="MaskGroup4"/>
                    </div>
                    <div>
                        <img className='w-[15rem] h-[16rem] m-[1rem] ' src={MaskGroup2} alt="MaskGroup2"/>
                        <img className='w-[15rem] h-[16rem] m-[1rem] ' src={MaskGroup5} alt="MaskGroup5"/>
                    </div>
                </div>
                <div>
                    <img className='w-[42rem] h-[24rem] my-[1rem] ' src={MaskGroup3} alt="MaskGroup3"/>
                    <img className='w-[42rem] h-[8rem]  ' src={MaskGroup6} alt="MaskGroup6"/>
                </div>
            </div>
            <div>
                <div>
                    <p className='w-[23rem] h-[4rem] my-10 '>K.R.K has the best auto deals for their <br /> customers and also the best car for you.</p>
                    <button className='my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] '>Buy Now</button>
                </div>
                <div>
                    <div>
                        <p>Get a free, instant valuation so you know exactly how much you can put towards your next car.</p>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <button className='my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] '>Value my car</button>
                    </div>
                </div>
                <div>
                    <div>
                        <div></div>
                        <h5>Save time researching</h5>
                        <div>Narrow down your options with help from our experts. They review all makes and models to help you find the right car.</div>
                        <button className='my-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem] '>Value my car</button>
                    </div>
                    <video src=""></video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home