import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import faqimg from '../../../images/faq/faq.jpg'

const Faq = () => {
    return (
        <div>
            <Container className="my-5">
                <div class="d-flex align align-items-center my-4 pt-4">
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                    <h1>FREQUENTLY ASKED QUSESTIONS</h1>
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                </div>
                <Row xs={1} md={2} lg={2} className="g-4 align-items-center">
                    <Col className="my-5">
                        <img className="w-100" src={faqimg} alt="" />
                    </Col>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Do you accept new patients?</Accordion.Header>
                                <Accordion.Body>
                                    Yes! Dentaverse is accepting new patients. As a full-service dental office, we are able to offer services to patients from all walks of life from children to adults and seniors.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you provide Emergency Dental Care?</Accordion.Header>
                                <Accordion.Body>
                                    Yes! Our Emergency Service doctotors offers variety of urgent dental care services. If you need to be seen by a dentist in Toronto as soon as possible you may submit an appointment request to us and we will do our best to accommodate you at the earliest possible time.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Do you accept dental insurance?</Accordion.Header>
                                <Accordion.Body>
                                    We are a non-assignment office meaning that patients pay for their fees when the service is provided. After your payment and appointment, our experienced staff will submit your dental claims on your behalf so you can be compensated by your insurance provider directly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>When are you open?</Accordion.Header>
                                <Accordion.Body>
                                    We are open 24/7. Our emergency Service doctors will help you anytime in your need.You can book our services From online.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;