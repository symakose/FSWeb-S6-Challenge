import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Films from "./Films";

function Ozellikler(props) {
  const { allchar } = props;

  const [showFilms, setShowFilms] = useState(false);

  const clickleBeni = () => {
    setShowFilms(!showFilms);
  };

  return (
    <div>
      <p>
        <b>Name: </b> {allchar.name}
      </p>
      <p>
        <b>Gender : </b>{" "}
        {allchar.gender.charAt(0).toUpperCase() + allchar.gender.slice(1)}
      </p>
      <p>
        <b>Height : </b> {allchar.height}
      </p>
      <p>
        <b>Mass : </b> {allchar.mass}
      </p>
      <p>
        <b>Birth Year : </b> {allchar.birth_year}
      </p>
      <p>
        <b>Eye Color: </b>{" "}
        {allchar.eye_color.charAt(0).toUpperCase() + allchar.eye_color.slice(1)}
      </p>
      <p>
        <b>Hair Color : </b>{" "}
        {allchar.hair_color.charAt(0).toUpperCase() +
          allchar.hair_color.slice(1)}
      </p>
      <p>
        <b>Skin Color : </b>{" "}
        {allchar.skin_color.charAt(0).toUpperCase() +
          allchar.skin_color.slice(1)}
      </p>
      <Button onClick={clickleBeni}>
        {showFilms ? "Hide Films" : "Show Films"}
      </Button>{" "}
      {showFilms && <Films filmBileseni={allchar} />}
    </div>
  );
}

export default Ozellikler;
