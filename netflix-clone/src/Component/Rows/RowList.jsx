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
      <Row title="Top Rated " fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMOvies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShows} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
      <Row title="Kids" fetchUrl={requests.fetchkids} />
    </>
  );
};

export default RowList;
