import { FooterDetails, InfoFooterDetails, SocialMediaLinks } from '../../Shared/Cards/Datas'
import { FooterCard, InfoFooterCard, SocialIcons } from '../../Shared/Cards/Cards'

const Footer = () => {
  return (
    <div className='bg-white h-[34rem] flex flex-col justify-center items-center gap-[7rem] '>
        <div className='flex mt-[3rem] gap-[4rem] '>
            <div className='flex flex-col justify-center gap-[1rem] text-[#590937] '>
                <p className='text-[3rem] font-bold leading-[3.8rem] '>MJaay<sub className='text-[1rem] leading-[29px] font-extralight '>autos</sub></p>
                <p className='font-semibold text-[1rem] text-[#380623] '>Powered by Afohams Investment</p>
                <div className='flex gap-[2rem]'>{SocialMediaLinks.map((SocialMediaLink) => (<SocialIcons {...SocialMediaLink}/>))}</div>
            </div>
            {FooterDetails.map((FooterDetail) => (<FooterCard {...FooterDetail}/>))}
            <div className='flex flex-col '>
                <h3 className='mb-[1rem] text-[#380623] font-bold text-[20px] leading-[22px] '>Contact us</h3>
                <div className='flex flex-col gap-[6px] '>
                {InfoFooterDetails.map((InfoFooterDetail) => (<InfoFooterCard {...InfoFooterDetail}/>))}
                </div>
                
            </div>
        </div>
        <div className='mt-[4rem] '>
            <hr />
            <div className='flex gap-[5rem]'>
                <p>Copyright © 2022 Afohams Investment.</p>
                <div>
                    <a href="/home">All Rights Reserved</a> | <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer