import React from "react";
import Loading from "./Loading";
import Anime from "./Anime";
import { useGlobalContext } from "../context";

function AnimeList() {
  const { loading, animeList } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (animeList.length < 1) {
    return <h2>no film</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">anime list</h2>
      <div className="anime-list-center">
        {animeList.map((item) => {
          return <Anime key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default AnimeList;
