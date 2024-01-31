import SocialMediaContainer from '../../assets/Images/Homepage/Social Media Container.png'
import EmailImage from '../../assets/Images/Homepage/Email.png'
import Telephone from '../../assets/Images/Homepage/Telephone.png'
import SpacerIconWrapper from '../../assets/Images/Homepage/Spacer Icon Wrapper.png'

const Footer = () => {
  return (
    <div className='bg-white h-[34rem] flex flex-col justify-center items-center gap-[7rem] '>
        <div className='flex mt-[3rem] gap-[4rem] '>
            <div className='flex flex-col justify-center gap-[1rem] text-[#590937] '>
                <p className='text-[3rem] font-bold leading-[3.8rem] '>MJaay<sub className='text-[1rem] leading-[29px] font-extralight '>autos</sub></p>
                <p className='font-semibold text-[1rem] text-[#380623] '>Powered by Afohams Investment</p>
                <img className='w-[11rem] h-[1.2rem] ' src={SocialMediaContainer} alt="SocialMediaContainer" />
            </div>
            <div>
                <h3 className='mb-[1rem] text-[#380623] font-bold text-[20px] leading-[22px] ' >Company</h3>
                <div className='flex flex-col gap-[6px] '>
                    <a href="">About</a>
                    <a href="">Contact Us</a>
                    <a href="">Careers</a>
                    <a href="">Culture</a>
                    <a href="">Blog</a>
                </div>
            </div>
            <div className=' '>
                <h3 className='mb-[1rem] text-[#380623] font-bold text-[20px] leading-[22px] '>Support</h3>
                <div className='flex flex-col gap-[6px]'>
                    <a href="">Getting started</a>
                    <a href="">Help center</a>
                    <a href="">Server status</a>
                    <a href="">Report a bug</a>
                    <a href="">Chat support</a>
                </div>
            </div>
            <div className='flex flex-col '>
                <h3 className='mb-[1rem] text-[#380623] font-bold text-[20px] leading-[22px] '>Contact us</h3>
                <div className='flex flex-col gap-[6px] '>
                    <div className='flex'>
                        <img src={EmailImage} alt="EmailImage" />
                        <a href="">contact@company.com</a>
                    </div>
                    <div className='flex'>
                        <img src={Telephone} alt="Telephone" />
                        <p>+23480 9319 8891</p>
                    </div>
                    <div className='flex'>
                        <img src={SpacerIconWrapper} alt="SpacerIconWrapper" />
                        <p>28B Awori Road, Dolphin Estate, Ikoyi-Obalende, Eti-Osa, Lagos.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-[4rem] '>
            <hr />
            <div className='flex gap-[5rem]'>
                <p>Copyright © 2022 Afohams Investment.</p>
                <div>
                    <a href="">All Rights Reserved</a> | <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer