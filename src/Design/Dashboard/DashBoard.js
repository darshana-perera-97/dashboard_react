import React from "react";
import Content from "./Content";
import LinkSet from "./LinkSet";
import OverView from "./OverView";
import Search from "./Search";

export default function DashBoard() {
  
  return (
    <div>
      <LinkSet />
      <Search />
      <div style={{ display: "flex" }}>
        <OverView />
        <Content />
      </div>
    </div>
  );
}
