import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import PickLift from './PickLift';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import { useState } from 'react';

const CalcuPage  = () => {
    const [isSelected, setSelected] = useState('squat');

const Test1 = () =>{
    console.log('This is the state', isSelected)
}
    
    return (  
    <Container>
        <Row>
            <Col>
            <h2>Share your Stats</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            </Col>
            <Col>
                <h2>Select Your Lift</h2>
                <PickLift isSelected={isSelected} onSelected={setSelected} test1 ={Test1} />
            </Col>
        </Row>
    </Container>
    );
}
 
export default CalcuPage;