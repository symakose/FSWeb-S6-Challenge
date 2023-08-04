// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from "axios";
import Ozellikler from "./Ozellikler";
import Baslik from "./Baslik";

function Karakter() {
  const [isim, setIsim] = useState(null);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((resp) => {
      console.log(resp.data);
      setIsim(resp.data);
    });
  }, []);

  return (
    <div>
      <Baslik />
      {isim.length === 0 ? (
        <div>Page Loading...</div>
      ) : (
        <div>
          {isim.map((char, index) => (
            <Ozellikler key={index} allchar={char} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Karakter;
