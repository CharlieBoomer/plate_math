import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import PickLift from './PickLift';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import AnalysisPage from './AnalysisPage'
import { useState } from 'react';

const CalcuPage  = ({langauge}) => {
    const barbellStyle = {
        height: "15px",
        width: '400px'
   }

    var weightLoaded = 0;

    const instructStyle = {
        height: "37px",
        width: '37px',
        borderRadius: "50%",
         display: "inline-block"

    }
    

    const [isLbs,setLbs] = useState(true);
    const [isSelected, setSelected] = useState('squat');
    const [isCalculated, setCalculated] = useState(false);
    const [ value, setValue ] = useState(['0']);
    const [ finalValue, setFinalValue ] = useState(null);
    const [lastAdded, setLastAdded] = useState([-1]);
    const [totalWeight, setTotalWeight] = useState(45);
    const [bodyWeight, setBodyWeight] = useState('');
    const [gender, setGender] = useState('Male');
    
    const plateStyle = {
        height: '90px',   //Default height is 90
        width: '10px'
        }

    const [weightList, setWeight] = useState([
        <div key = {0}className='bg-secondary mx-1' style={barbellStyle}  >&nbsp;</div>
    ]);

    const onAddBtnClick = () => {
        lastAdded.push(weightCase(value));
        weightLoaded += weightCase(value) * 2;
        plateStyle.height = weightStyle(weightLoaded / 2);
        weightList.push(<div className="bg-secondary mx-1" key={weightList.length} style={plateStyle} >&nbsp;</div>)
        //setWeight(weightList);
        weightList.unshift(<div className="bg-secondary mx-1" key={weightList.length} style={plateStyle} >&nbsp;</div>)
        // weightLoaded += weightCase(value) * 2;
        setTotalWeight(totalWeight + weightLoaded);
        console.log({weightLoaded});
        console.log(totalWeight);
        // lastAdded.push(weightCase(value));
        setWeight([...weightList])
      };

      const onSubtractBtnClick = () => {
        weightList.pop()
        //setWeight(weightList);
        weightList.shift()
        // weightLoaded= weightLoaded;
        setTotalWeight(totalWeight - lastAdded.pop() * 2);
        
        setWeight([...weightList])
      };

    //   const onRangeChange =() => {
    //     value
    //   }

      function weightCase(val){
        switch(val){
            case "0":
                return 10;
            case "1":
                return 25;
            case "2":
                return 35;
            case "3":
                return 45;
            default:
                return 10;
        }
      }
      function weightStyle(val){
        switch(val){
            case 10:
                return '75px';
            case 25:
                return '90px';
            case 35:
                return '110px';
            case 45:
                return '120px';
            default:
                return '90px';
        }
      }
const Test1 = () =>{
    console.log('This is the state', isSelected)
}
    
    return (  
    <Container>
        <Row className='mt-4'>
            <Col>
            <div className='d-flex'>
                <h2 className='fw-bold text-secondary mb-4'>{langauge?"Поделитесь своей статистикой":'Share your Stats'}</h2>
                <div className="bg-primary text-secondary text-center align-middle fw-bold fs-4 mx-3 mt-1" style={instructStyle}>1</div>
            </div>
            <Form>
                <Form.Group className="mb-3 me-5" controlId="formWeight" size ='sm'>
                    <Form noValidate validated={true}>
                        <Form.Label>{langauge?"Введите свой вес":'Enter your Weight'}</Form.Label>
                        <Form.Control value = {bodyWeight} type="number" placeholder={isLbs ? "lbs" : "kg"} onChange = {e => setBodyWeight(e.target.value)} required/>
                        <Form.Control.Feedback>{langauge?"выглядит неплохо":'looks good'}</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>{langauge?"Введите число или используйте стрелки":'Enter a number or Use the arrows'}</Form.Control.Feedback>
                    </Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={isLbs ? "lbs" : "kg"}
                        className="my-1"
                        onChange={()=>{setLbs(!isLbs)}}
                    />
                </Form.Group>

                <Form.Group className="mb-3 me-5" controlId="formGender">
                    <Form.Label>{langauge?"Выбери свой пол":'Select your Gender'}</Form.Label>
                    <Form.Select size="sm" value={gender} onChange = {e => setGender(e.target.value)}>
                        <option value='Male'>{langauge?"Мужской":'Male'}</option>
                        <option value='Female'>{langauge?"Женский":'Female'}</option>
                    </Form.Select>
                </Form.Group>
            
                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
            </Form>
            
            </Col>
            <Col>
                
               <div className="d-flex"> 
                    <h2 className='fw-bold text-secondary mb-4'>{langauge?"Выберите свой подъемник":'Select your Lift'}</h2>
                    <div className="bg-primary text-secondary text-center align-middle fw-bold fs-4 mx-3 mt-1" style={instructStyle}>2</div>
                </div>
                <PickLift isSelected={isSelected} onSelected={setSelected} test1 ={Test1} />
            </Col>
        </Row>
        <Row className='text-center'>
            <hr className='m-4' />
            <div className="d-flex justify-content-center">
                <h2 className='mb-5 fw-bold text-secondary'>{langauge?"Добавьте свой вес":'Add your Weight'}</h2>
                <div className="bg-primary text-secondary text-center align-middle fw-bold fs-4 mx-3 mt-1" style={instructStyle}>3</div>
            </div>    
            <Form className='row'>
                
                                                                                                    {/* ADD */}
                <div className="col">
                    <Button className='col' variant="secondary" onClick={onAddBtnClick}> {langauge?"Добавлять":'Add'} {weightCase(value)} lbs</Button>{' '}
                </div>
                    <div className="col">
                                                                                                    {/* slider */}
                        <Form.Group className="col" controlid='formAddWeight'> 
                            {/* <Form.Label>{weightCase(value)}</Form.Label> */}
                            <Form.Range 
                            min={0} 
                            max={3}
                            value={value}
                            onChange = {e => setValue(e.target.value)}
                            // onAfterChange = {e => setFinalValue(e.target.value)}
                            
                            />
                        </Form.Group>
                     </div>
                    <div className="col">                                                                   {/* Minus*/}
                        <Button className='col' variant="secondary" onClick={onSubtractBtnClick} disabled = {lastAdded[lastAdded.length - 1] === -1? true:false}>{langauge?"Вычесть":'Subtract'} {lastAdded[lastAdded.length - 1] === -1? "":lastAdded[lastAdded.length - 1]} lbs</Button>{' '}
                    </div>
                </Form>
            </Row>
        <Row className='d-flex align-items-center justify-content-center my-5'>
            {weightList}
            
        </Row>
        <div className='d-flex align-items-center justify-content-center my-5'>
            <h3 className='text-secondary fw-bold'>{totalWeight} lbs {isSelected}</h3>
        </div>
        <div className='d-flex align-items-center justify-content-center my-5'>
            <Button disabled ={bodyWeight === ''?true:false} className='fs-4 fw-bold text-secondary' controlid='calculate' variant={isCalculated ? 'warning' : 'primary'} onClick={() => (setCalculated(!isCalculated))}><strong>{isCalculated ? (langauge? "Пересчитать":'Recalculate') : (langauge? "Рассчитать":'Calculate')}</strong></Button>
        </div>
         {isCalculated && <AnalysisPage isSelected={isSelected} totalWeight ={totalWeight} bodyWeight={bodyWeight} langauge={langauge}/>} 
    </Container>
    );
}
 
export default CalcuPage;