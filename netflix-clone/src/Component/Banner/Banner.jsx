import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://images.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_buttons play">Play</button>
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_button_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="button_fadeBottom" />
    </div>
  );
};

export default Banner;