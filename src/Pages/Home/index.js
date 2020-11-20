import React from "react";
import { Row } from "react-bootstrap";
import BookDisplay from "../../Components/Books";
import Profile from "../../Components/User";

export default function Home() {

  return (
      <Row>
        <Profile />
        <BookDisplay />
      </Row>
  );
}
