import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './DoctorInfo.css'


const DoctorInfo = ({ singleDoctor }) => {
    const { name, doctorImg, rank, cretification } = singleDoctor.doctor;

    return (
        <Col>
            <Card className="rounded h-100 shadow">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card.Img className="w-100 mx-auto doctor-info" variant="top" src={doctorImg} />
                    </Col>
                    <Col>
                        <Card.Body className="text-start">
                            <Card.Title>{name} <br /><span className="fw-normal fs-6">{rank}</span> </Card.Title>
                            <Card.Text >
                                <span className="fw-bold ">Cretification:</span> {cretification}
                            </Card.Text>
                        </Card.Body>

                    </Col>
                </Row>
            </Card>


        </Col>

    );
};

export default DoctorInfo;