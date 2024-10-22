import { useContext } from "react";
import "./PageContainer.css";
import { GlobalContext } from "../context/GlobalContext";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import useSingleMovieFetch from "../hooks/movies-data-hooks/useSingleMovieFetch";
import { useParams } from "react-router-dom";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import SingleMovieDetails from "../components/SingleMovie/SingleMovieDetails";

export default function SingleMovie() {
  const themeContext = useContext(GlobalContext);
  const { id } = useParams(); // Get the movie ID from the URL
  const { singleMovieData, loading, error } = useSingleMovieFetch(id);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div
      className="page-container"
      style={{
        backgroundColor:
          themeContext.theme === "dark" ? "#5a5a5a " : "#e6e6e6 ",
      }}
    >
      <Navbar />
      <SingleMovieDetails movie={singleMovieData} />
      <Footer />
    </div>
  );
}
