import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Service = ({ service }) => {
    const { serviceName, icon, shortDescription, id } = service;
    const history = useHistory();
    const handelServiceDescriptiopn = () => {
        history.push({
            pathname: `/servicedetails/${id}`,
            state: { detail: service }
        });
    }

    return (
        <Col>
            <Card className="rounded h-100 shadow">
                <Card.Img className="w-25 mx-auto" variant="top" src={icon} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text className="text-start">
                        {shortDescription}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <button onClick={handelServiceDescriptiopn} className="custom-button">See-Details</button>
                </Card.Footer>

            </Card>
        </Col>
    );
};

export default Service;