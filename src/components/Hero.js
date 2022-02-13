import React from 'react'
import './Hero.css'

import { Modal, Button } from 'react-bootstrap';
import AddCustomerModal from './AddCustomerModal';



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registration Form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddCustomerModal />
            </Modal.Body>

        </Modal>
    );
}


const Hero = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (

        < div className='hero' >
            <div className='content'>
                <p></p>
                <p>
                    Debt Free Living | Financial Freedom | Wealth Building
                </p>
                <p>The Financially Free Me</p>
                <p>Sign-up for Financial Freedom Coaching Sessions</p>

                <Button className='button btn-outline-warning' variant="secondary " onClick={() => setModalShow(true)}>
                    30-minute FREE
                    initial consultations
                </Button>
            </div>



            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div >



    )
}

export default Hero
