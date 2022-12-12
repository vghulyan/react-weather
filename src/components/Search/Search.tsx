import React, { useState } from "react";
import {
  SearchElement,
  SearchIcon,
  SearchInput,
  LocationButton,
  LocationIcon,
  LocationParagraph,
} from "./styled";
import OpenWeatherMap from "openweathermap-ts";

const openWeather = new OpenWeatherMap({
  apiKey: process.env.REACT_APP_WEATHER_API_KEY ?? "",
  language: "en",
});

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const searchByCityHandler = (event: any) => {
    if (event.key === "Enter") {
      setStatus("Searching by city... ");
      //   setSearchTerm(event.target.value);
      openWeather
        .getCurrentWeatherByCityName({
          cityName: searchTerm, //event.target.value,
        })
        .then((weather) => {
          if (weather?.cod == 404) {
            // the cod is type string, so == should be OK
            setStatus(`Unable to retrieve your city : ${event.target.value}`);
          } else {
            setStatus("");
            setWeather(weather);
          }
        });
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setSearchTerm("");
      setWeather(null);
      setStatus("Locating by position...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          openWeather
            .getCurrentWeatherByGeoCoordinates(
              position.coords.latitude,
              position.coords.longitude
            )
            .then((weather) => {
              setWeather(weather);
            });
        },
        () => {
          setStatus("Unable to retrieve your location");
          alert("Geolocation is not supported by this browser.");
        }
      );
    }
  };

  return (
    <div data-testid="weather">
      <SearchElement>
        <SearchIcon />
        <SearchInput
          data-testid="search-input"
          value={searchTerm}
          onChange={onSearchInputChanged}
          onKeyDown={(e) => searchByCityHandler(e)}
          placeholder="Search for location"
        />
        <LocationButton onClick={getLocation}>
          <LocationIcon />
        </LocationButton>
      </SearchElement>
      {status && <div>{status}</div>}
      {weather && (
        <div>
          <LocationParagraph>
            Lat: {weather?.coord?.lat} - Lng: {weather?.coord?.lon}
          </LocationParagraph>
          <LocationParagraph>
            Temperature: {weather?.main.temp}
          </LocationParagraph>
          <LocationParagraph>Location: {weather?.name}</LocationParagraph>
          <LocationParagraph>
            Sunrise: {new Date(weather?.sys?.sunrise).toString()}
          </LocationParagraph>
          <LocationParagraph>
            Sunset: {new Date(weather?.sys?.sunset).toString()}
          </LocationParagraph>
        </div>
      )}
    </div>
  );
};

export default Search;
