import { Outlet } from "react-router-dom";
import Dashboardside from "../static/Dashboardside";
import "./DashboardLayout.css"
import { useState, } from "react";
import 'aos/dist/aos.css';
import { AiOutlineMenuFold } from "react-icons/ai";

const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
  

    <div className="w-full h-screen bg-black flex ">
      <div
        className={`sidebar ${open ? "absolute left-0 w-40 " : "hidden"
          } md:block md:w-[20%]  md:relative h-full  bg-black`} 
      >
        <Dashboardside open={open} setOpen={setOpen} />
      </div>
      <div className="md:w-[80%] w-full h-full  bg-gray-600 " >
        <div className="w-full h-[7%] bg-gray-300 shadow shadow-black flex items-center justify-end px-3">
          {/* <div className="flex justify-center items-center  ">
            <button
              className="flex flex-col gap-[2px] w-6 shadow shadow-black py-[3px] px-[2px] md:hidden "
             
            >
              <div className="h-[2px] w-full bg-black rounded"></div>
              <div className="h-[2px] w-full bg-black rounded"></div>
              <div className="h-[2px] w-full bg-black rounded"></div>
            </button>
          </div> */}

         <AiOutlineMenuFold fontSize={'25px'}  className=" md:hidden cursor-pointer"  onClick={() => setOpen((prev) => !prev)}  />
        </div>
        <div className="w-full h-[93%] bg-slate-50 overflow-auto">
          <Outlet context={{ setOpen, open }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
