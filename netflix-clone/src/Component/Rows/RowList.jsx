import React from "react";
import requests from "../../utils/requests";
import Row from "../Rows/Row/Row";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Treanding Now" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED " fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES " fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES " fetchUrl={requests.fetchRomanceMOvies} />
      <Row title="TV SHOWS" fetchUrl={requests.fetchTvShows} />
      <Row title="DOCUMENTARIES " fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
