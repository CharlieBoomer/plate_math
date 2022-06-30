import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card'
import cardD from './assets/professional-deadlift-platform.jpg'
import cardS from './assets/Mirafit-M1-Squat-and-Dip-Rack-in-use.jpg'
import cardB from './assets/BenchPress-1366163679.jpg'

const LiftExplorer = () => {
    return ( 
        
        <div className="row b-5 p-5" id="explore">
            <h2 className='fw-bold text-secondary mb-5 text-center'>The Compound Lifts</h2>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src={cardB} />
                    <Card.Body>
                        <Card.Title className="fs-4 mb-2">The Bench Press</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">Upperbody lift</Card.Subtitle>
                        <Card.Text>
                            <p>Primary Muscles:</p>
                            <ul>
                                <li>Pectoralis</li>
                                <li>Triceps</li>
                            </ul>

                        </Card.Text>
                        <Button variant="secondary">Learn More</Button>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src={cardS} />
                    <Card.Body>
                        <Card.Title className="fs-4 mb-2">The Squat</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">Lowerbody lift</Card.Subtitle>
                        <Card.Text>
                        <p>Primary Muscles:</p>
                            <ul>
                                <li>Gluteus maximus</li>
                                <li>Quadriceps</li>
                            </ul>
                        </Card.Text>
                        <Button variant="secondary">Learn More</Button>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src={cardD} />
                    <Card.Body>
                        <Card.Title className="fs-4 mb-2">The Deadlift</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">Lowerbody &amp; Back</Card.Subtitle>
                        <Card.Text>
                        <p>Primary Muscles:</p>
                            <ul>
                                <li>Erector spinae</li>
                                <li>Gluteus maximus</li>
                            </ul>

                        </Card.Text>
                        <Button variant="secondary">Learn More</Button>
                    </Card.Body>
            </Card>
            
        </div>
     );
}
 
export default LiftExplorer;