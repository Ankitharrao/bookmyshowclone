import React from "react";
import { Carousel } from "react-bootstrap";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who enters dreams to steal secrets faces his toughest challenge.",
    image: "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png"
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travels through a wormhole in space.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/4/z/x/small-spos8585-poster-movie-interstellar-wall-poster-sl-8585-original-imaghzwa4c7zahsz.jpeg?q=90&crop=false"
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    description: "The Avengers assemble once more to undo Thanos' actions.",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/Avengers-Endgame-banner-poster.jpg"
  }
];

function HeroCarousel() {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img className="d-block w-100" src={movie.image} alt={movie.title} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
