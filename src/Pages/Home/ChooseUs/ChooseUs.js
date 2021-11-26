import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import care1 from "../../../images/choose-us/c-1.jpg";
import care2 from "../../../images/choose-us/c-2.jpg";
import care3 from "../../../images/choose-us/c-3.jpg";

const ChooseUs = () => {
    return (
        <div>
            <Container className="my-5">
                <div class="d-flex align align-items-center my-4 pt-4">
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                    <h1>WHY CHOOSE US</h1>
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                </div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card className="rounded h-100">
                            <Card.Img className="rounded-top" variant="top" src={care1} />
                            <Card.Body>
                                <Card.Title>Comprehensive Services</Card.Title>
                                <Card.Text>
                                    We’re your one-stop-shop for dental care. Whatever you’re experiencing, we have the experience, technology, and compassion to help reach your goals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="rounded h-100">
                            <Card.Img className="rounded-top" variant="top" src={care2} />
                            <Card.Body>
                                <Card.Title>Patient-centered Care</Card.Title>
                                <Card.Text>
                                    We make it our aim to accommodate your individual needs and place you as our priority. We offer a range of comforts and conveniences, such as Netflix, Saturday appointments and online booking.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="rounded h-100">
                            <Card.Img className="rounded-top" variant="top" src={care3} />
                            <Card.Body>
                                <Card.Title>Your Comfort, Our Priority</Card.Title>
                                <Card.Text>
                                    Enjoy a relaxing office environment, welcoming team, and soothing amenities.
                                    Plus, we offer advanced sedation options to ensure your comfort and help those with anxiety.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;