import React, { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import MovieCard from "../components/MovieCard";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col } from "react-bootstrap";

const movies = [
  { id: 1, title: "Inception", poster: "https://cdn.britannica.com/13/147813-050-37062815/Leonardo-DiCaprio-Joseph-Gordon-Levitt-Inception-Christopher-Nolan.jpg" },
  { id: 2, title: "Interstellar", poster: "https://showbizcafe.com/wp-content/uploads/2014/11/interstellar_movie-wide.jpg" },
  { id: 3, title: "Avengers", poster: "https://c4.wallpaperflare.com/wallpaper/1010/321/105/the-avengers-avengers-endgame-ant-man-avengers-avengers-endgame-hd-wallpaper-preview.jpg" },
  { id: 4, title: "The Dark Knight", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA" }, // New movie
  { id: 5, title: "Joker", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ" }, // New movie
  { id: 6, title: "Spider-Man: No Way Home", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXG-39ax_uSWVuU05XI2eynuf0D9rcrNmFBJfCDIm_K9A2SUdFTMRREZ7JVqliTX3NodG9A" } // New movie
];

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter movies based on search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavbarComponent onSearch={setSearchQuery} />
      <Container>
        <HeroCarousel />
        <Row>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Col key={movie.id} md={4}>
                <MovieCard movie={movie} />
              </Col>
            ))
          ) : (
            <h3>No movies found</h3>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
