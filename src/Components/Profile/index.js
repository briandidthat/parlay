import React from "react";
import { loadState } from "../../Store/actions";
import { Col, Card, Image, Row } from "react-bootstrap";
import { snake } from "../../assets";

const Profile = React.memo(() => {
  const state = loadState();

  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Body>
          <Col className="d-flex flex-column align-items-center text-center">
            <Image src={snake} roundedCircle width="150" />
            <Row className="mt-3">
              <h4>{state.username}</h4>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
});

export default Profile;
