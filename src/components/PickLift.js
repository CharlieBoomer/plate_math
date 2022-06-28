import Container from "react-bootstrap/esm/Container";
import ImageGrey from "./ImageGrey";
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Squat from './assets/squat-cropped.jpg'
import Bench from './assets/bench-crop.jpg'
import Deadlift from './assets/Deadlift-Crop.jpg'

const PickLift = ({isSelected,onSelected,test1}) => {
    return ( 
        <>
            <Container>
                <Row>
                    <Col>
                    <ImageGrey source = {Bench} alternate ="aaaaa" text="Bench" isSelected= {isSelected} height = "150" width="150" value ="bench" onSelected={onSelected}/>
                
                    </Col>
                    <Col>
                    <ImageGrey source = {Squat} alternate ="aaaaa" text="Squat" isSelected= {isSelected} height = "150" width="150" value = "squat" onSelected={onSelected}/>
                    </Col>
                    <Col>
                    {/* <img src={Squat} height="100" width="100" alt="aaaaa" /> */}
                    <ImageGrey source = {Deadlift} alternate ="aaaaa" text="Deadlift" isSelected= {isSelected} height = "150" width="150" value = "deadlift" onSelected={onSelected}/>
                    </Col>

                </Row>
            </Container>
        </>
     );
}
 
export default PickLift;