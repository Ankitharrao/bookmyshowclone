import React from "react";
import { Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/movie/${movie.id}`); // Navigates to the booking page
  };


  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.poster} alt={movie.title} className="movie-card-img" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button variant="primary" onClick={handleBooking}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
