// import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import { AiOutlineMenuFold } from "react-icons/ai";
// import 'aos/dist/aos.css';
// import "./DashboardLayout.module.css"
// import ScrollToTop from "../../utils/ScrollToTop";
// import Dashboardside from "../static/Dashboardside";

// const DashboardLayout: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <ScrollToTop>
//       <div className="w-full h-screen bg-black flex">
//         <div
//           className={`sidebar ${
//             open ? "absolute left-0 w-40 " : "hidden"
//           } md:block md:w-[20%] md:relative h-full bg-black`}
//         >
//           <Dashboardside open={open} setOpen={setOpen} />
//         </div>
//         <div className="md:w-[80%] w-full h-full bg-gray-600">
//           <div className="w-full h-[7%] bg-gray-300 shadow shadow-black flex items-center justify-end px-3">
//             <AiOutlineMenuFold
//               fontSize={'25px'}
//               className="md:hidden cursor-pointer"
//               onClick={() => setOpen((prev) => !prev)}
//             />
//           </div>
//           <div className="w-full h-[93%] bg-slate-50 overflow-auto">
//             <Outlet context={{ setOpen, open }} />
//           </div>
//         </div>
//       </div>
//     </ScrollToTop>
//   );
// };

// export default DashboardLayout;


// DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import DashboardSideBar from '../static/DashboardSideBar/DashboardSideBar';
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <DashboardSideBar />

      {/* <div className={styles.mobile}>
      <DashboardSideBar />
      </div> */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;