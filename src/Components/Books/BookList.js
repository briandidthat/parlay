import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

const Book = React.memo(({ book }) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col sm={3}>
          <h6 className="mb-0">Author:</h6>
        </Col>
        <Col sm={9}>
          <h6 className="mb-0">{book.author}</h6>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <h6 className="mb-0">Title:</h6>
        </Col>
        <Col sm={9}>
          <h6 className="mb-0">{book.title}</h6>
        </Col>
      </Row>
    </ListGroup.Item>
  );
});

export const BookList = React.memo(({ list }) => {
  return (
    <ListGroup>
      {list.map((book) => (
        <Book key={book.title} book={book} />
      ))}
    </ListGroup>
  );
});
