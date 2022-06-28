import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card'

const LiftExplorer = () => {
    return ( 
        <div className="row b-5 p-5">
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
            </Card>
            
        </div>
     );
}
 
export default LiftExplorer;