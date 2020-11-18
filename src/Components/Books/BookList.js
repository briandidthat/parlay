import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

const Book = React.memo(({ book }) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col sm={6}>
          <h6 className="mb-1">Title: {book.title}</h6>
          <h6 className="mb-1">Author: {book.author}</h6>
          <h6 className="mb-1">Description: {book.description} </h6>
          <h6 className="mb-1">Amazon Product: {book.amazon_product_url}</h6>
        </Col>
        <Col sm={6}>
          <Image src={book.book_image} width="150" />
        </Col>
      </Row>
    </ListGroup.Item>
  );
});

export const BookList = React.memo(({ list }) => {
  return (
    <ListGroup>
      {list.map((book, idx) => (
        <Book key={idx} book={book} />
      ))}
    </ListGroup>
  );
});
