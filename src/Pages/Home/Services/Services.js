import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services] = useServices([]);

    return (
        <div>
            <Container className="my-4">
                <div class="d-flex align align-items-center my-4 pt-4">
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                    <h1>SERVICES</h1>
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)

                    }
                </Row>
            </Container>
        </div >
    );
};

export default Services;