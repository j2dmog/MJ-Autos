import React from 'react'
import NavBar from '../NavBar/NavBar'
import FaceLogo from "../../assets/Icons/FaceLogo.png"
import FaceLogo2 from "../../assets/Icons/FaceLogo2.png"
import MasesOfCars from "../../assets/Images/MasesOfCars.png"
import Footer from '../Footer/Footer'

const Service = () => {
  return (
    <div className='bg-white'>
      <NavBar/>
      <div className='flex flex-col my-[5rem] mx-[20rem]'>
        <h1 className="text-[#380623] text-[3rem] font-extrabold w-[700px] leading-[60px]">How to create an advert on Afohamsauto</h1>
        <div className="flex text-[#6D7D8B] gap-[2rem] mt-[2rem]">
            <img className="w-[40px] h-[40px] mb-[rem]" src={FaceLogo} alt="FleetLogo"/>
            <p className="text-[14px] font-semibold pt-[0.7rem]">John Birmingham </p>
            <span className='pt-[0.7rem]'>|</span>
            <p className='text-[14px] font-semibold pt-[0.7rem]'>25 December 2019</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[3rem]'>
        <img src={MasesOfCars} alt="MasesOfCars" />
        <p className='w-[680px] text-[#380623] text-[18px] font-semibold leading-[30px]'>
        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
        <br /><br />
        He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
        <br /><br />
        The bedding was hardly able to cover it and seemed ready to slide off any moment.
        <br /><br />
        His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
        <br /><br />
        "What's happened to me? " he thought. It wasn't a dream.
        <br /><br />
        His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
        <br /><br />
        A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
        <br /><br />
        It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
        <br /><br />
        Gregor then turned to look out the window at the dull weather.
        <br /><br />
        Drops of rain could be heard hitting the pane, which made him feel quite sad.
        <br /><br />
        "How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position.
        <br /><br />
        However hard he threw himself onto his right, he always rolled back to where he was.
        <br /><br />
        He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.
        </p>
      </div>
      <div className="flex text-[#6D7D8B] gap-[2rem] mt-[4rem] justify-center">
          <img className="w-[40px] h-[40px]" src={FaceLogo2} alt="FleetLogo"/>
          <div>
            <h4 className='text-[1rem] font-extrabold text-[#BBC8D4] leading-[20px]'>written by</h4>
            <h3 className='text-[24px] font-normal text-[#380623] leading-[30px]'>John Birmingham</h3>
            <p className='text-[14px] font-semibold text-[#6D7D8B] leading-[21px] '>COO at Team. Author of the upcoming book on Team Management and Leadership.</p>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Service