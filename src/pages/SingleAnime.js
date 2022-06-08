import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const baseUrl = "https://ghibliapi.herokuapp.com/films/";

function SingleAnime() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [filmData, setFilmData] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchFilmData() {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}${id}`);
        const data = await response.json();
        if (data) {
          setFilmData(data);
        } else {
          setFilmData([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchFilmData();
  }, [id]);
  const { title, image, director, original_title, description, release_date } =
    filmData;

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section anime-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="film-title">{title}</h2>
      <div className="film">
        <img src={image} alt={title} />
        <div className="film-info">
          <p>
            <span className="film-data">title : </span>
            {title}
          </p>
          <p>
            <span className="film-data">Original title : </span>
            {original_title}
          </p>
          <p>
            <span className="film-data">director : </span>
            {director}
          </p>
          <p>
            <span className="film-data">description : </span>
            {description}
          </p>
          <p>
            <span className="film-data">release_date : </span>
            {release_date}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleAnime;
