import { Outlet } from "react-router-dom";
import Navbar from "../pages/dashboard/partials/SearchBar";
import SideNav from "../pages/dashboard/partials/SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col flex-grow">
        <nav>
          <SideNav />
        </nav>
        <main className="p-4 flex-grow overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
