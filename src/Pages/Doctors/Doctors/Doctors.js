import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import DoctorInfo from './DoctorInfo/DoctorInfo';

const Doctors = () => {
    const [services] = useServices([]);
    // const { allDocs } = services.doctor;
    // let allDoctors = services.map(service => service.doctor.name);

    //    custom fonction to find instructor if one instructor takes multiple courses
    const getunique = (names) => {
        const uniqueName = [];
        const allDoctors = [];
        for (const element of names) {
            if (uniqueName.indexOf(element.doctor.name) === -1) {
                uniqueName.push(element.doctor.name);
                allDoctors.push(element);
            }
        }
        return allDoctors;
    }
    const doctors = getunique(services);

    return (
        <div className="my-4">
            <Container>
                <div class="d-flex align align-items-center my-4 pt-4">
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                    <h1>DOCTORS</h1>
                    <hr class="mx-3 opacity-100 flex-grow-1 custom-color" />
                </div>
                <Row xs={1} md={1} lg={2} className="g-4">
                    {
                        doctors.map(doctor => <DoctorInfo
                            key={doctor.id}
                            singleDoctor={doctor}
                        >
                        </DoctorInfo>)

                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;