import React from "react";
import Charts from "./Charts";

export default function DataBar(prop) {
  const [t, setT] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [d, setD] = React.useState([0]);
  setTimeout(() => {
    setT(t.concat(prop.data));
  }, 2000);
  React.useEffect(() => {
    console.log(t);
    if (t.length > 13) {
      t.shift();
    }
  }, [t]);
  return (
    <div
      style={{
        display: "flex",
        padding: "0px 30px",
        border: "5px solid #797979CC",
        height: "240px",
        borderRadius: "40px",
        marginLeft: "40px",
        
      }}
    >
      {t.map((val, key) => {
        return <Charts data={val} />;
      })}
    </div>
  );
}
