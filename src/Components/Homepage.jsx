import { Container, Row, Col, Media } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import styled, { keyframes } from "styled-components";
import SignInUpForm from "./SignInUpForm";

const Homepage = () => {
  const textAnimation = keyframes`
    50%{
      content: 'life.'
  `;

  const Homepagestyle = styled.div`
    .homepage {
      height: 90vh;
      background-color: #ffffff;
    }

    .homepageleft {
      height: 90vh;
    }

    .mediaItems {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
    }

    .slogan {
      display: flex;
      align-items: center;
    }

    .manageText {
      font-family: "Saira", sans-serif;
      font-size: 3em;
      color: white;
    }

    .workText {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: 25px;
      margin-top: 10px;
      font-family: "Saira", sans-serif;
      font-size: 6em;
      color: white;
    }

    .sloganBox {
      width: 100%;
      position: relative;
    }

    .yourText:after {
      content: "work.";
      animation: ${textAnimation} 4s infinite;
    }

    .facebook {
      cursor: pointer;
      &:hover {
        transition: all 0.2s ease-in-out;
        transform: translateY(-7px);
      }
    }

    .twitter {
      cursor: pointer;

      &:hover {
        transition: all 0.2s ease-in-out;
        transform: translateY(-7px);
      }
    }

    .instagram {
      cursor: pointer;

      &:hover {
        transition: all 0.2s ease-in-out;
        transform: translateY(-7px);
      }
    }
  `;

  return (
    <Homepagestyle>
      <Container fluid className="homepage">
        <Row>
          <Col>
            <Row className="homepageleft">
              <Col lg={2} className="mediaItems mb-5">
                <ul className="list-unstyled">
                  <Media as="li" className="mb-4 facebook">
                    <Facebook size={36} color="dark" />
                  </Media>
                  <Media as="li" className="mb-4 twitter">
                    <Twitter size={36} color="dark" />
                  </Media>
                  <Media as="li" className="mb-4 instagram">
                    <Instagram size={36} color="dark" />
                  </Media>
                </ul>
              </Col>
              <Col lg={10} className="slogan">
                <div className="sloganBox">
                  <span className="manageText text-dark">manage</span>
                  <br />
                  <div className="workText">
                    <span className="yourText text-dark">your </span>
                    <span className="worklife text-dark"></span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="d-flex justify-content-start align-items-center">
            <SignInUpForm />
          </Col>
        </Row>
      </Container>
    </Homepagestyle>
  );
};

export default Homepage;
