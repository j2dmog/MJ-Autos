import { Link } from 'react-router-dom'
import Button from '../../Shared/Input_and_Button/Button'
import Input from '../../Shared/Input_and_Button/Input'
// import NavBar from './NavBar/NavBar'
import Group39521 from "../../assets/Images/Group 39521.png"

const SignIn = () => {
  return (
    <div className='absolute z-10 left-[7rem] top-[6rem] flex justify-center items-center 
    w-[70rem] h-[35rem] bg-gray-100 rounded-[2rem]
       shadow drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
      <div className='bg-white w-[30rem] h-[30rem] flex flex-col justify-center items-center rounded-l-[2rem]'>
        <div className='mb-[2rem]'>
          <h1>LOGIN</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <div className='flex flex-col gap-[2rem]'>
          <div className='flex flex-col'>
              <label htmlFor="username">Email</label>
              <Input className="rounded-[1rem] text-center w-[20rem] h-[3rem] text-black border-[2px] border-black "type='email'  Placeholder='Enter your Username'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password">Password</label>
              <Input className="rounded-[1rem] text-center w-[20rem] h-[3rem] bg-white text-black border-[2px] border-black "type='password' Placeholder='Input your password'/>
              <div className='flex gap-[2rem] mb-[2rem]'>
                <div><a href=""><Input type='checkbox' className="border-[1px] border-black"/></a><span>Remember me</span></div>
                <a href="">Forget Password?</a>
              </div>
            </div>
        </div>
        <div>
            <Button className="rounded-[1rem] text-center w-[20rem] h-[3rem] bg-[#3a3a3a] " Value="Login"/><br />
            <div className='flex justify-center gap-[1rem]'>
              <hr className='bg-black w-[8.5rem] mt-[0.8rem] ' />
              <p>or</p>
              <hr className='bg-black w-[8.5rem] mt-[0.8rem] ' />
            </div>
            <div className='flex gap-[1rem]'>
              {/* <Button className="border-[2px] h-[3rem] w-[9rem]" Value="Google"/>
              <Button className="border-[2px] h-[3rem] w-[9rem]" Value="Facebook"/> */}
              <Link className="rounded-[1rem] text-center pt-[0.6rem] border-[2px] h-[3rem] w-[9rem]">
                <p>Google</p>
              </Link>
              <Link className="rounded-[1rem] text-center pt-[0.6rem] border-[2px] h-[3rem] w-[9rem]">
                <p>Facebook</p>
              </Link>
            </div>
          </div>
      </div>
      <img className='w-[30rem] h-[30rem] bg-[#f6bb4d] rounded-r-[2rem]' src={Group39521} alt="Group39521" />
    </div>
  )
}

export default SignIn