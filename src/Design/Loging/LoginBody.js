import React from "react";

export default function LoginBody(prop) {
  const [userName, setUserName] = React.useState("");
  const [pswd, setPswd] = React.useState("");

  if ((userName === "darshana") & (pswd === "1234")) {
    prop.funct(true);
  }
  return (
    <div style={{ background: "#E0DFDF", height: "67vh", paddingTop: "180px" }}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "20%",
          background: "white",
          padding: "30px 40px",
          boxShadow: "1px 1px 2px black",
          borderRadius: "10px",
        }}
      >
        <p style={{ fontSize: "18px" }}>User Name</p>
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          style={{
            fontSize: "15px",
            border: "white",
            margin: "10px 0px",
            padding: "5px 0px",
            outline: "none",
          }}
          placeholder="Username is Here"
        />
        <p style={{ fontSize: "18px", marginTop: "20px" }}>Password</p>
        <input
          value={pswd}
          onChange={(e) => {
            setPswd(e.target.value);
          }}
          style={{
            fontSize: "15px",
            border: "white",
            margin: "10px 0px",
            padding: "5px 0px",
            outline: "none",
          }}
          placeholder="Password is Here"
          type="password"
        />
        <div style={{ marginTop: "25px" }}>
          <button
            onClick={() => {
              if (userName === "" && pswd === "") {
                window.alert("Username and Password fields cant be empty");
              } else if (userName === "") {
                window.alert("Username field cant be empty");
              } else if (pswd === "") {
                window.alert("Password field cant be empty");
              } else {
                window.alert("Username and Password not matched");
              }
              setUserName("");
              setPswd("");
            }}
            style={{
              width: "100%",
              padding: "5px",
              background: "#00ff00",
              borderColor: "#00ff00",
              fontSize: "15px",
            }}
          >
            Submit
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={() => {
              setUserName("");
              setPswd("");
            }}
            style={{
              width: "100%",
              padding: "5px",
              fontSize: "15px",
              color: "white",
              background: "red",
              borderColor: "red",
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
