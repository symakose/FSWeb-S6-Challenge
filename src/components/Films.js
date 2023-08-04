import React from "react";

function Films(props) {
  const { filmBileseni } = props;

  return (
    <div className="Filmler">
      <ul className="liste">
        {filmBileseni.films.map((film, index) => (
          <li key={film}>
            <b>{index + 1}. Film: </b> {film}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Films;
