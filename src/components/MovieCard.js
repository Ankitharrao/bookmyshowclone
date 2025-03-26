import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button as={Link} to={`/movie/${movie.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
