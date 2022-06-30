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

    const instructStyle = {
        height: "37px",
        width: '37px',
        borderRadius: "50%",
         display: "inline-block"

    }
    

    const [isLbs,setLbs] = useState(true);
    const [isSelected, setSelected] = useState('squat');
    const[isCalculated, setCalculated] = useState(false);

    const [weightList, setWeight] = useState([
        <div key = {0}className='bg-secondary mx-1' style={barbellStyle}  >&nbsp;</div>
    ]);

    const onAddBtnClick = () => {
        weightList.push(<div className="bg-secondary mx-1" key={weightList.length} style={plateStyle} >&nbsp;</div>)
        //setWeight(weightList);
        weightList.unshift(<div className="bg-secondary mx-1" key={weightList.length} style={plateStyle} >&nbsp;</div>)
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
        <Row className='mt-4'>
            <Col>
            <div className='d-flex'>
                <h2 className='fw-bold text-secondary mb-4'>Share your Stats</h2>
                <div className="bg-primary text-secondary text-center align-middle fw-bold fs-4 mx-3 mt-1" style={instructStyle}>1</div>
            </div>
            <Form>
                <Form.Group className="mb-3 me-5" controlId="formWeight" size ='sm'>
                    <Form.Label>Enter your Weight</Form.Label>
                    <Form.Control type="number" placeholder={isLbs ? "lbs" : "kg"} />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={isLbs ? "lbs" : "kg"}
                        className="my-1"
                        onChange={()=>{setLbs(!isLbs)}}
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
                
               <div className="d-flex"> 
                    <h2 className='fw-bold text-secondary mb-4'>Select your Lift</h2>
                    <div className="bg-primary text-secondary text-center align-middle fw-bold fs-4 mx-3 mt-1" style={instructStyle}>2</div>
                </div>
                <PickLift isSelected={isSelected} onSelected={setSelected} test1 ={Test1} />
            </Col>
        </Row>
        <Row className='text-center'>
            <hr className='m-4' />
            <div className="d-flex justify-content-center">
                <h2 className='mb-5 fw-bold text-secondary'>Add your Weight</h2>
                <div className="bg-primary text-secondary text-center align-middle fw-bold fs-4 mx-3 mt-1" style={instructStyle}>3</div>
            </div>    
            <Form className='row'>
                <div className="col">
                    <Button className='col' variant="secondary" onClick={onAddBtnClick}>Add 45 lbs</Button>{' '}
                </div>
                    <div className="col">
                        <Form.Group className="col" controlid='formAddWeight'>
                            
                            <Form.Range />
                        </Form.Group>
                     </div>
                    <div className="col">
                        <Button className='col' variant="secondary" onClick={onSubtractBtnClick}>Subtract 45 lbs</Button>{' '}
                    </div>
                </Form>
            </Row>
        <Row className='d-flex align-items-center justify-content-center my-5'>
            {weightList}
            
        </Row>
        <div className='d-flex align-items-center justify-content-center my-5'>
            <h3 className='text-secondary fw-bold'>{(weightList.length * 45)} lbs {isSelected}</h3>
        </div>
        <div className='d-flex align-items-center justify-content-center my-5'>
            <Button className='fs-4 fw-bold text-secondary' controlid='calculate' variant={isCalculated ? 'warning' : 'primary'} onClick={() => (setCalculated(!isCalculated))}><strong>{isCalculated ? 'Recalculate' : 'Calculate'}</strong></Button>
        </div>
         {isCalculated && <AnalysisPage isSelected={isSelected}/>} 
    </Container>
    );
}
 
export default CalcuPage;