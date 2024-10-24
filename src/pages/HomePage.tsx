import Footer from "../components/common/footer/Footer";
import PopularMovies from "../components/HomePage/popularMovies/PopularMovies";
import "./PageContainer.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MoviesMenu from "../components/HomePage/moviesMenu/MoviesMenu";
import Navbar from "../components/common/navbar/Navbar";

export default function HomePage() {
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
      <PopularMovies />
      <MoviesMenu />
      <Footer />
    </div>
  );
}
