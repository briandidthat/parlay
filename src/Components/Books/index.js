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

  if (!data) return <Spinner />;


  console.log(data.results)
  return (
    <Col md={7}>
      <Card className="mb-3" style={{ height: "32rem"}}>
        <Card.Header className="text-center">NYT BestSellers</Card.Header>
        <Card.Body style={{ overflowY: "scroll"}}>
          <BookList list={data.results} />
        </Card.Body>
      </Card>
    </Col>
  );
}
