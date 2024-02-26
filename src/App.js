import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Buy from "./components/Buy_CMS/Buy";
import Sell from "./components/Sell/Sell";
import Service from "./components/services_and_repair/ServiceAndRepair";
import Contact from "./components/Contacts/Contacts";
import SignIn from "./components/SignIn";
import ProductHomePage from "./components/products/ProductHomePage"


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/ProductHomePage",
      element: <ProductHomePage/>
    },
    {
      path:"/Buy",
      element: <Buy/>
    },
    {
      path:"/Sell",
      element: <Sell/>
    },
    {
      path:"/Service",
      element: <Service/>
    },
    {
      path:"/Contact",
      element: <Contact/>
    },
    {
      path:"/SignIn",
      element: <SignIn/>
    },
  ])
  return (
    <div className='bg-[#f2f0ec] bg-cover'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
