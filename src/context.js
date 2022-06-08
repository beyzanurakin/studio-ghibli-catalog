import React, { useContext, useEffect, useState } from "react";

const url = "https://ghibliapi.herokuapp.com/films";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  //const [searchTerm, setSearchTerm] = useState("a");
  const [animeList, setAnimeList] = useState([]);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      if (data) {
        setAnimeList(data);
      } else {
        setAnimeList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <AppContext.Provider value={{ loading, animeList }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
