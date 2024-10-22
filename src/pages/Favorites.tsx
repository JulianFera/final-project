import { useContext } from "react";
import Footer from "../components/common/footer/Footer";
import "./PageContainer.css";
import { GlobalContext } from "../context/GlobalContext";
import Navbar from "../components/common/navbar/Navbar";
import FavoritesList from "../components/Favorites/FavoritesList";

export default function Favorites() {
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
      <FavoritesList />
      <Footer />
    </div>
  );
}
