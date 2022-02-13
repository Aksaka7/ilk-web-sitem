
import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';





function AddCustomerModal() {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        formEmail: "",
        formPhone: "",
        formAddress: "",
        formCity: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };


    const submitData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, formEmail, formPhone, formAddress, formCity } = userData;

        if (firstName && lastName && formEmail && formPhone && formAddress && formCity) {


            const res = await fetch(
                'https://timmango-1cf83-default-rtdb.europe-west1.firebasedatabase.app/timmango.json', {
                method: "POST",
                Headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName, lastName, formEmail, formPhone, formAddress, formCity,
                }),

            }
            );

            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    formEmail: "",
                    formPhone: "",
                    formAddress: "",
                    formCity: "",
                });
                alert('Your records have been placed in the Transaction queue. Thanks');
            } else {
                alert("Yetet")
            }

        } else {
            alert("Please fill in the blanks.")
        }

    };

    return (
        <>
            <Form className='p-5' method='POST'>


                <Row className="mb-3 p-1">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type='text' name='firstName' placeholder="First name" value={userData.firstName} onChange={postUserData} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type='text' name='lastName' placeholder="Last name" value={userData.lastName} onChange={postUserData} required />
                    </Form.Group>
                </Row>



                <Row className="mb-3 p-1">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='formEmail' placeholder="Enter email" value={userData.formEmail} onChange={postUserData} required />
                    </Form.Group>
                </Row>

                <Row className="mb-3 p-1">
                    <Form.Group as={Col} controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" name='formPhone' placeholder="Enter Phone" value={userData.formPhone} onChange={postUserData} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 p-1" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' name='formAddress' placeholder="1234 Main St" value={userData.formAddress} onChange={postUserData} />
                </Form.Group>


                <Row className="mb-3 p-1">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name='formCity' value={userData.formCity} onChange={postUserData} />
                    </Form.Group>
                </Row>



                <Button variant="primary" type="submit" onClick={submitData}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AddCustomerModal;
