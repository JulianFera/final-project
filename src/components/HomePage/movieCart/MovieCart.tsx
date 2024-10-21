import { Card } from "antd";
import "./MovieCart.css";
import { AllMoviesType } from "../../../types";

const { Meta } = Card;

export default function MovieCard(props: AllMoviesType) {
  return (
    <Card
      className="movie-card"
      hoverable
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          className="movie-card-image"
        />
      }
    >
      <Meta className="meta-title" title={props.title} />
    </Card>
  );
}
