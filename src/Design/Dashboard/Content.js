import React from "react";
import Persontage from "../Datas/Persontage";
import Income from "../Datas/Income";
import Countries from "./Countries";
import DataBar from "./DataBar";
import DataView from "./DataView";

export default function Content() {
  const [data, setData] = React.useState(10);
  const t = Math.random();
  setTimeout(() => {
    var y = Math.round(t * 100);
    setData(y);
  }, 2000);

  return (
    <div>
      <div style={{ padding: "20px", display: "flex" }}>
        <DataView data={data} />
        <DataBar data={data} />
        <Countries />
      </div>
      <Persontage data={data} />
      <Income/>
      <div></div>
    </div>
  );
}
