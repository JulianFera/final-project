import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./PageContainer.css";

export default function HomePage() {
  return (
    <div className="page-container">
      <Navbar />
      <MovieList />
      <Footer />
    </div>
  );
}
