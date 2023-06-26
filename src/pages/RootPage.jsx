import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const RootPage = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen max-h-full dark:bg-[#202C36] dark:text-white text-[#111517] ">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootPage;
