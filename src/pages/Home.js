import React, { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import MovieCard from "../components/MovieCard";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col } from "react-bootstrap";

const movies = [
  { id: 1, title: "Inception", poster: "https://via.placeholder.com/200x300" },
  { id: 2, title: "Interstellar", poster: "https://via.placeholder.com/200x300" },
  { id: 3, title: "Avengers", poster: "https://via.placeholder.com/200x300" },
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
