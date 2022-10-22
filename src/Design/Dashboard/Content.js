import React from "react";
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
    <div style={{ padding: "20px", display: "flex" }}>
      <DataView data={data} />
      <DataBar data={data} />
    </div>
  );
}
