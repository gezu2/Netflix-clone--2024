import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import requests from "../../../utils/requests";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerURL] = useState("");
  const base_URL = "https://images.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || original_name).then((url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        console.log(urlParams.get("v"));
        setTrailerURL(urlParams.get("v"));
      });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleclick(movie)}
            key={index}
            src={`${base_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster${isLargeRow ? " row_posterLarge" : ""}`}
          />
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

// return (
//   <div className="row">
//     <h1>{title}</h1>
//     <div className="row_posters">
//       {movie?.map((movie, index) => (
//         <img
//           // onClick={() => handleclick(movie)}
//           key={index}
//           src={`${base_URL}${
//             isLargeRow ? movie.poster_path : movie.backdrop_path
//           }`}
//           alt={movie.name}
//           className={`row_poster${isLargeRow && "row_posterLarge"}`}
//         />
//       ))}
//     </div>
//     {/* <div style={{ padding: "40px" }}>
//       {trailerUrl && <youTube videoID={trailerUrl} opts={opts} />}
//     </div> */}
//   </div>
// );
// };
// export default Row;
