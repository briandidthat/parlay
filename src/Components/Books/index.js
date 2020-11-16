import React from "react";
import useSWR from "swr";
import { BookList } from "./BookList";
import { Card, Col, Spinner } from "react-bootstrap";

export default function BookDisplay() {
  const { data, error } = useSWR('/api/books', { refreshInterval: 0 });
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
