import React from "react";

function Header() {
  return (
    <Header style={headerStyle}>
      <h1>TodoList</h1>
    </Header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
