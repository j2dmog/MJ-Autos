import { Link } from "react-router-dom"
import Button from "../Input_and_Button/Button"


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
    return (
      <div className='flex flex-col gap-[1rem]'>
          <h1>M.J.O<sub>autos</sub></h1>
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