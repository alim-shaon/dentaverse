import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const location = useLocation();
    const { serviceName, img, fullDescription, doctor } = location.state.detail;

    return (
        <div>
            <Container>

                <Card className="my-4">
                    <Card.Header as="h2">{serviceName}</Card.Header>
                    <Card.Body>
                        <Card.Img className="w-50 mx-auto service-img" variant="top" src={img} />
                        <Card.Text className="text-start">
                            <span className="fw-bold">Description:</span>{fullDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <h2 className="my-5">Specialized Doctor</h2>
                <Card className="rounded h-100 border-0">
                    <Row xs={1} md={1} className="g-4">
                        <Col>
                            <Card.Img style={{ height: "200px" }} className="w-25 rounded-circle" variant="top" src={doctor.doctorImg} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{doctor.name} <br /><span className="fw-normal fs-6">{doctor.rank}</span> </Card.Title>
                            </Card.Body>

                        </Col>
                    </Row>
                </Card>

            </Container>
        </div >
    );
};

export default ServiceDetails;