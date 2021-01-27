import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

const WhoWeAreStyled = styled.div`
  .container {
    padding: 10vh 0;
    height: 80vh;
    margin: 0 !important;
  }
`;

const WhoWeAre = () => {
  return (
    <WhoWeAreStyled>
      <Container fluid>
      <h2 style={{ marginBottom: "5vh" }}>WHAT WE DO</h2>
        <Row>
          <Col className="">
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="./img/blog1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="">
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="./img/blog2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="">
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="./img/blog3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </WhoWeAreStyled>
  );
};

export default WhoWeAre;
