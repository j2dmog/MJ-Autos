import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home";



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    }
  ])
  return (
    <div className='bg-[#f2f0ec]'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
