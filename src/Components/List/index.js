import React from "react";
import { ListGroup } from "react-bootstrap";

export const List = React.memo(({ list }) => {
  return (
    <ListGroup>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ListGroup>
  );
});

const ListItem = React.memo(({ item }) => {
  return <ListGroup.Item>{item}</ListGroup.Item>;
});
