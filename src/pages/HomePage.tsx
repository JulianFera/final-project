import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import AllMovies from "../components/HomePage/allMovies/AllMovies";
import PopularMovies from "../components/HomePage/popularMovies/PopularMovies";
import "./PageContainer.css";

export default function HomePage() {
  return (
    <div className="page-container">
      <Navbar />
      <PopularMovies />
      <AllMovies />
      <Footer />
    </div>
  );
}
