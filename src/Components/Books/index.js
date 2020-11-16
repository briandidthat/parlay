import React from "react";
import { Card, Col, Spinner } from "react-bootstrap";
// import { Col, ListGroup, Row } from "react-bootstrap";
import useSWR from "swr";
import { BOOK_URL as url } from "../../utils/constants";
import { BookList } from "./BookList";

export default function BookDisplay() {
  const { data, error } = useSWR(url, { refreshInterval: 0 });
  if (error) return "ERROR";

  if (!data) return <Spinner />;
  return (
    <Col md={8}>
      <Card className="mb-3">
        <Card.Header>NYT BestSellers</Card.Header>
        <Card.Body>
          <BookList list={data.results.lists[0].books} />
        </Card.Body>
      </Card>
    </Col>
  );
}
