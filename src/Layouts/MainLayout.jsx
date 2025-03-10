import { Outlet } from "react-router-dom";
import NavBar from "../assets/components/Navbar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
