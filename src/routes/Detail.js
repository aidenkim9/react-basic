import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      {movie ? (
        <div>
          <img src={movie.large_cover_image} />
          <a href={movie.url}>{movie.title}</a>
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
