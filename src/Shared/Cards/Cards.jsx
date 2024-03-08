import { Link } from "react-router-dom"
import Button from "../Input_and_Button/Button"
import { useEffect } from "react"


export const TextCards = ({title,description,pics})=> {
    return (
        <div className='4xsm:w-auto 3xsm:w-auto 2xsm:w-auto w-[24rem] h-[27.5rem] p-6 '>
            <div>
                <h3>{title}</h3>
                <p className=''>{description}</p>
            </div>
            <img className='w-[18rem] h-[13rem] ' src={pics} alt="picture" />
        </div>
    )
}

export const CodeDetails = ({DescriptionText,ParagraphText,}) => {
    
    useEffect(() => {

        window.scrollTo({bottom: 0, behavior: 'smooth'})
    }, [])

    return (
      <div className='flex flex-col gap-[1rem]'>
          <h1 onClick={() => {
                window.scrollTo({bottom: 0, behavior: "smooth"})
            }}
           >M.J.O<sub>autos</sub></h1>
          <p>{DescriptionText}</p>
          <p>{ParagraphText}</p>
      </div>
    )
  }
  

export const ImageCards = ({ImageGroup}) => {
    return (
      <img className='w-[15rem] h-[16rem] mt-[2.4rem] mr-[3rem] ' src={ImageGroup} alt="ImageGroup"/>
    )
  }

  export const LogosCards = ({Cars}) => {
    return (
        <div >
            <img src={Cars} alt="Layer51" />
        </div>
    )
}

export const CarTypesCard = ({Image1,BrandType,CarType,Distance,CarPrice}) => {
    return (
        <div>
            <div className='w-[23rem] h-[27.6rem] bg-white p-[2rem] '>
                <img src={Image1} alt="Image1" />
                <p>{BrandType}</p>
                <div className='grid grid-cols-2 '>
                    <div className='w-[7.4rem] h-[1.7rem] bg-[#d9d9d9] rounded-[0.2rem] p-1 mt-6 '>{CarType}</div>
                    <div className='w-[7.4rem] h-[1.7rem] bg-[#d9d9d9] rounded-[0.2rem] p-1 mt-6 '>{Distance}</div>
                    <div className='w-[7.4rem] h-[1.7rem] bg-[#d9d9d9] rounded-[0.2rem] p-1 mt-6 '>{CarPrice}</div>
                </div>
            </div>
            <Link to='/ProductHomePage'><Button className='m-[2rem] rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem]' Value="Read more"/></Link>
        </div>
    )
}

export const CommentsCard = ({Image26, Avatar, Afohams, span,ImageStar})=> {
    return (
        <div className='flex'>
            <img className='w-[1rem] h-[31rem]' src={Image26} alt="Rectangle26"/>
            <div className=' mx-[2rem]'>
                <div className='ml-[6rem] p-[1.5rem] h-[7.4rem] flex bg-Group10 bg-no-repeat '>
                    <div className='flex'>
                        <img className='w-[3.5rem] h-[3.5rem]' src={Avatar} alt="Avatar" />
                        <div className='flex flex-col'>
                        <div className='w-[23rem] ml-[1rem] '>{Afohams}<br /><span>{span}</span></div>
                            <img className='my-[1rem] w-[7.5rem] h-[1.5rem] ml-[16rem] ' src={ImageStar} alt="ImageStar" />
                        </div>
                    </div>
                </div>
                <div className='bg-Group13 m-[2rem] p-[1.5rem] h-[7.4rem] w-[30rem]'>
                    <div className='w-[23rem] ml-[5rem] '>{Afohams}<br /><span>{span}</span></div>
                    <img className='my-[1rem] w-[7.5rem] h-[1.5rem] ml-[20rem] ' src={ImageStar} alt="ImageStar" />
                </div>
                            <div className='bg-Group14 ml-[6rem] p-[1.5rem] h-[7.4rem] w-[30rem]'>
                    <div className='w-[23rem] ml-[5rem] '>{Afohams}<br /><span>{span}</span></div>
                    <img className='my-[1rem] w-[7.5rem] h-[1.5rem] ml-[20rem] ' src={ImageStar} alt="ImageStar" />
                </div>
            </div>
        </div>
    )
}

export const SellDetailsCard = ({Image26, ManFace, Afohams, span, ImageStar, fullName, Date}) => {
    return (
        <div className="flex w-[38.2rem] h-[30.1rem] gap-[2rem]">
            <img className='w-[1rem] h-[31rem]' src={Image26} alt="Rectangle26"/>
            <img className="w-[101px] h-[101px] mt-[4rem]" src={ManFace} alt="ManFace" />
            <div className=" flex flex-col gap-[2rem] my-[6rem]">
                <p>{Afohams} <br /> <span>{span}</span></p>
                <div>
                    <p>{fullName}</p>
                    <p>{Date}</p>
                </div>
                <img className='my-[1rem] w-[7.5rem] h-[1.5rem] ml-[13rem] ' src={ImageStar} alt="ImageStar" />
            </div>
        </div>
    )
}

export const  FooterCard = ({Organization,Enquiry,Contact,Info,Nature,Chatting}) => {
    return (
        <div>
            <h3 className='mb-[1rem] text-[#380623] font-bold text-[20px] leading-[22px] ' >{Organization}</h3>
            <div className='flex flex-col gap-[6px] '>
                <a href="">{Enquiry}</a>
                <a href="">{Contact}</a>
                <a href="">{Info}</a>
                <a href="">{Nature}</a>
                <a href="">{Chatting}</a>
            </div>
        </div>
    )
}
export const  InfoFooterCard = ({SvgLogo,Title}) => {
    return (
        <div className='flex'>
            <img src={SvgLogo} alt="EmailImage" />
            <a href="">{Title}</a>
        </div>
    )
}

export const  SocialIcons = ({Media})=>{
    return (
        <Link><img className="w-[11px] h-[19px]" src={Media} alt="Media" /></Link>
    )
}

export const TradeImageCards = ({TradeIcon}) => {
    return (
        <div>
            <img className="w-[140px] h-[140px]" src={TradeIcon} alt="TradeIcon"/>
        </div>
    )
}

export const TradeCards = ({TradeTitle, TradeText}) => {
    return (
        <div className="text-[#380623] w-[358px] h-[183px]">
            <h4 className="font-extrabold">{TradeTitle}</h4>
            <h4 className="font-semibold">{TradeText}</h4>
        </div>
    )
}

export const FleetOfCarCards = ({Fleet, FleetTitle, FleetText, FleetLogo, Name, FleetDate}) => {
    return (
        <div className="w-[21rem] h-[27rem] bg-white flex flex-col gap-[2rem]">
            <img className="w-[21rem] h-[204px]" src={Fleet} alt="Fleet" />
            <div className="text-[#380623] text-center flex flex-col gap-[1rem]">
                <h3 className="text-[24px] font-normal">{FleetTitle}</h3>
                <p className="text-[14px] font-semibold">{FleetText}</p>
                <div className="flex text-[#6D7D8B] justify-center">
                    <img className="w-[22px] h-[22px]" src={FleetLogo} alt="FleetLogo"/>
                    <p className="text-[14px] font-semibold">{Name} | {FleetDate}</p>
                </div>
            </div>
        </div>
    )
}