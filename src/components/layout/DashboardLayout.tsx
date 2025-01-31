import { Outlet } from "react-router-dom";
import Dashboardside from "../static/Dashboardside";
import { useState } from "react";

const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex bg-white">
      {/* Sidebar */}
      <div
        className={`${
          open ? "absolute left-0 w-64 h-full" : "hidden"
        } bg-black md:block md:w-[25%] md:relative`}
      >
        <Dashboardside open={open} setOpen={setOpen} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 h-full overflow-auto">
        <Outlet context={{ setOpen, open }} />
      </div>
    </div>
  );
};

export default DashboardLayout;
