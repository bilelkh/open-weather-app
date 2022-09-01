import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import SearchInput from "../components/searchInput";
import WeatherItem from "../components/weatherItem";
import { getWeatherByCity } from "../services/weather";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState();
  const [weather, setWeather] = useState();
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handlSearch = () => {
    setLoading(true);
    getWeatherByCity(searchText)
      .then(({ data }) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setWeather(undefined);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <SearchInput handleChange={handleChange} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={handlSearch}>
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div className="row mt-4">
          <div className="col-md-12">
            {weather ? (
              <>
                <ListGroup>
                  <ListGroup.Item>
                    Country : {weather.sys.country}
                  </ListGroup.Item>
                  <ListGroup.Item>City : {weather.name}</ListGroup.Item>
                  <ListGroup.Item>Base : {weather.base}</ListGroup.Item>
                  <ListGroup.Item>
                    Wind speed : {weather.wind.speed}
                  </ListGroup.Item>
                </ListGroup>

                {weather.weather.map((item, index) => (
                  <WeatherItem key={index} weather={item} />
                ))}
              </>
            ) : (
              <p className="text-center">No Data</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
