import React from "react";
import ToPBarLogin from "../Common/ToPBarLogin";
import DashBoard from "../Dashboard/DashBoard";
import LoginBody from "./LoginBody";

export default function Login() {
  const [state, setState] = React.useState(false);
  console.log(state);
  return (
    <div>
      <ToPBarLogin />
      {!state && <LoginBody funct={setState} />}
      {state && <DashBoard />}
      {/* <DashBoard /> */}
    </div>
  );
}
