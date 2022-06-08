import React from "react";
import { Link } from "react-router-dom";

function Anime({ id, title, director, description, image, movie_banner }) {
  return (
    <article className="anime">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="anime-footer">
        <h3>{title}</h3>
        <h4>By {director}</h4>
        <Link to={`/anime/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
}

export default Anime;
