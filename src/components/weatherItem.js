import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function WeatherItem({ weather }) {
  return (
    <ListGroup className="mt-4">
      <ListGroup.Item>Main : {weather.main}</ListGroup.Item>
      <ListGroup.Item>Description : {weather.description}</ListGroup.Item>
    </ListGroup>
  );
}

export default WeatherItem;
