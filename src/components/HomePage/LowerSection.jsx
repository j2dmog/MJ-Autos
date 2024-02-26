// import Rectangle26 from '../../assets/Images/Rectangle 26.png'
// import Stars from '../../assets/Images/Stars.svg'
// import Avatar from '../../assets/Images/Avatar.png'
import Image from '../../assets/Images/Image.png'
import Group39468 from '../../assets/Images/Group 39468.svg'
import Group39477 from '../../assets/Images/Group 39477.png'
import { CarTypesCard, CommentsCard } from '../../Shared/Cards/Cards'
import { CarTypesDetails, CommentDetails } from '../../Shared/Cards/Datas'



const LowerSection = () => {
  return (
    <div className='mt-[15rem] '>
        <h2 className='ml-[6rem] text-black text-[2rem] font-normal my-[1rem] '>Best deals for you </h2>
        <div className='grid grid-cols-3 m-[6rem] '>
            {
                CarTypesDetails.map((CarTypesDetail) => (<CarTypesCard {...CarTypesDetail}/> ))
            }
            <div className='mt-[3rem] '>
                <div className='flex gap-[6rem] '>
                    <div className='bg-Group39469 bg-no-repeat w-[40rem] pl-[4rem] pt-[6rem] '>
                        <div className='text-[2rem] w-[13rem] '>What our customer says </div>
                        <div className='w-[20rem] mt-[3rem] '>MJaay has the best auto deals for their customers and also the best car for you.</div>
                    </div>
                    {
                        CommentDetails.map((CommentDetail) => (<CommentsCard {...CommentDetail} />))
                    }
                </div>
                <div className='flex flex-col justify-center items-center w-[68rem] h-[48rem] gap-[8rem] '>
                    <div className='bg-white w-[62rem] h-[30rem] relative '>
                        <div className='flex justify-center items-center gap-[3rem] '>
                            <img className='w-[25rem]' src={Image} alt="Imaged" />
                            <div className='flex flex-col pt-[6rem] '>
                                <h2 className='text-[#380623] font-normal text-[2rem] leading-[2.5rem] w-[31rem] '>Send me great MJaay auto offers and the latest vehicle reviews.</h2>
                                <div className='flex gap-[1rem] my-[2rem]'>
                                    <input className='bg-[#D9D9D9] text-[#6D7D8B] rounded-[5px] w-[29rem] h-[3.4rem] text-Start p-[1rem] ' type="text" placeholder='Enter your email ' />
                                    <button className='rounded-[1rem] text-white bg-[#802258] w-[10rem] h-[3.5rem]'>Subscribe </button>
                                </div>
                                <p className='text-[#6D7D8B] font-semibold text-[18px] leading-[29px] w-[35rem] h-[4.5rem] '>By signing up, you agree to receive marketing emails in accordance with our privacy notice. You can unsubscribe at any time.</p>
                            </div>
                        </div>
                        <img className='absolute left-[45rem] top-[18rem] ' src={Group39468} alt="" />
                    </div>
                    <div>
                        <img src={Group39477} alt="Gr oup39477" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LowerSection