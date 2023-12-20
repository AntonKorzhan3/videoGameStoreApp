import React from "react";
import { Button, Link } from "react-bootstrap";

import "../styles.css";

function Main() {
  return (
    <div className="App" style={{ padding: "5px" }}>
      <h1>Video Game Store</h1>
      <Button
        className="my-button"
        style={{ background: "gray" }}
        href="/videoGameList"
      >
        See VideoGames
      </Button>
      <Button
        className="my-button"
        style={{ background: "gray" }}
        href="/orderItemsList"
      >
        See Order Items
      </Button>
      <Button
        className="my-button"
        style={{ background: "gray" }}
        href="/ordersList"
      >
        See Orders
      </Button>
    </div>
  );
}
export default Main;
