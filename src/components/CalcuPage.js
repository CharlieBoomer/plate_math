import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import PickLift from './PickLift';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import AnalysisPage from './AnalysisPage'
import { useState } from 'react';

const CalcuPage  = () => {
    const barbellStyle = {
        height: "15px",
        width: '400px'
   }
   const plateStyle = {
    height: "90px",
    width: '10px'
    }
    var weightLoaded = 45;
    

    
    const [isSelected, setSelected] = useState('squat');
    const[isCalculated, setCalculated] = useState(false);

    const [weightList, setWeight] = useState([
        <div key = {0}className='bg-primary mx-1' style={barbellStyle}  >&nbsp;</div>
    ]);

    const onAddBtnClick = () => {
        weightList.push(<div className="bg-primary mx-1" key={weightList.length} style={plateStyle} >&nbsp;</div>)
        //setWeight(weightList);
        weightList.unshift(<div className="bg-primary mx-1" key={weightList.length} style={plateStyle} >&nbsp;</div>)
        weightLoaded= weightLoaded + 90;
        setWeight([...weightList])
      };

      const onSubtractBtnClick = () => {
        weightList.pop()
        //setWeight(weightList);
        weightList.shift()
        weightLoaded= weightLoaded - 90;
        setWeight([...weightList])
      };

const Test1 = () =>{
    console.log('This is the state', isSelected)
}
    
    return (  
    <Container>
        <Row>
            <Col>
            <h2>Share your Stats</h2>
            <Form>
                <Form.Group className="mb-3 me-5" controlId="formWeight" size ='sm'>
                    <Form.Label>Enter your Weight</Form.Label>
                    <Form.Control type="number" placeholder="lbs" />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="lbs"
                        className="my-1"
                    />
                </Form.Group>

                <Form.Group className="mb-3 me-5" controlId="formGender">
                    <Form.Label>Select your Gender</Form.Label>
                    <Form.Select size="sm">
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Select>
                </Form.Group>
            
                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
            </Form>
            
            </Col>
            <Col>
                <h2>Select Your Lift</h2>
                <PickLift isSelected={isSelected} onSelected={setSelected} test1 ={Test1} />
            </Col>
        </Row>
        <Row className='text-center'>
            <hr className='m-4' />
            <h2 className='mb-5'>Add your Weight</h2>
            
            <Form className='row'>
                <div className="col">
                    <Button className='col' variant="primary" onClick={onAddBtnClick}>Add 45 lbs</Button>{' '}
                </div>
                    <div className="col">
                        <Form.Group className="col" controlid='formAddWeight'>
                            
                            <Form.Range />
                        </Form.Group>
                     </div>
                    <div className="col">
                        <Button className='col' variant="warning" onClick={onSubtractBtnClick}>Subtract 45 lbs</Button>{' '}
                    </div>
                </Form>
            </Row>
        <Row className='d-flex align-items-center justify-content-center my-5'>
            {weightList}
            
        </Row>
        <div className='d-flex align-items-center justify-content-center my-5'>
            <h3>{(weightList.length * 45)} lbs {isSelected}</h3>
        </div>
        <div className='d-flex align-items-center justify-content-center my-5'>
            <Button className='' controlid='calculate' variant={isCalculated ? 'warning' : 'primary'} onClick={() => (setCalculated(!isCalculated))}><strong>{isCalculated ? 'Recalculate' : 'Calculate'}</strong></Button>
        </div>
         {isCalculated && <AnalysisPage isSelected={isSelected}/>} 
    </Container>
    );
}
 
export default CalcuPage;