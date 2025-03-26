import React from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function MovieDetails() {
  const { id } = useParams();
  return (
    <Container>
      <h1>Movie Details - {id}</h1>
      <Button href="/booking">Book Tickets</Button>
    </Container>
  );
}

export default MovieDetails;