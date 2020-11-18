import React from "react";
import useSWR from "swr";
import { BookList } from "./BookList";
import { Card, Col, Spinner } from "react-bootstrap";

export default function BookDisplay() {
  const { data, error } = useSWR("/api/books/best-sellers", {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });
  if (error) return "ERROR";

  // During loading state, show spinner. Should only show the first time the page is rendered due to caching
  if (!data)
    return (
      <Col  className="text-center"md={7}>
        <Spinner animation="border" size="md" />
      </Col>
    );

  return (
    <Col md={7}>
      <Card className="mb-3" style={{ height: "32rem" }}>
        <Card.Header className="text-center">NYT Best Sellers</Card.Header>
        <Card.Body style={{ overflowY: "scroll" }}>
          <BookList list={data.results} />
        </Card.Body>
      </Card>
    </Col>
  );
}
