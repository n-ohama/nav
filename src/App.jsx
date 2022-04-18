import { MainNavbar } from "./components/main_navbar";
import logo from "./img/sideplank.jpg";

export const App = () => {
  return (
    <>
      <MainNavbar />
      <img src={logo} alt="logo" width={"100%"} />
    </>
  );
};
