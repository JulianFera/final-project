import { useContext } from "react";
import "./PageContainer.css";
import { GlobalContext } from "../context/GlobalContext";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";

export default function SingelMovie() {
  const themeContext = useContext(GlobalContext);
  return (
    <div
      className="page-container"
      style={{
        backgroundColor:
          themeContext.theme === "dark" ? "#5a5a5a " : "#e6e6e6 ",
      }}
    >
      <Navbar />
      <div>SingeMovie</div>
      <Footer />
    </div>
  );
}
