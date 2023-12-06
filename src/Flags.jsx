import { useEffect, useState } from "react";
import Info from "./Info";

function Flags() {
  const [flags, setFlags] = useState([]);
  const [select, setSelect] = useState("europe");
  const [selectedFlagIndex, setSelectedFlagIndex] = useState(null);

  let fetchData = async () => {
    let response = await fetch(
      "https://restcountries.com/v3.1/region/" + select
    );
    let json = await response.json();
    console.log(json);
    setFlags(json);
  };

  const click = (index) => {
    setSelectedFlagIndex(index === selectedFlagIndex ? null : index);
  };

useEffect(() => {
  setSelectedFlagIndex(null);
}, [select])

  return (
    <div>
      <select
        name=""
        id="chooseRegion"
        onChange={(event) => {
          setSelect(event.target.value);
        }}
      >
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="africa">Afrika</option>
      </select>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Hämta flaggor
      </button>
      <div>
        {flags &&
          flags.map((flag, index) => (
            <div key={index}>
              <img src={flag.flags.png} onClick={() => click(index)} className="pic" />
              {selectedFlagIndex === index && <Info data={flag} />}
            </div>
          ))}
        </div>
    </div>
  );
}

export default Flags;
