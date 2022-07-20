import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card'
import cardD from './assets/professional-deadlift-platform.jpg'
import cardS from './assets/Mirafit-M1-Squat-and-Dip-Rack-in-use.jpg'
import cardB from './assets/BenchPress-1366163679.jpg'

const LiftExplorer = ({langauge}) => {
    return ( 
        
        <div className="row b-5 p-5" id="explore">
            <h2 className='fw-bold text-secondary mb-5 text-center'>{langauge?"Составные лифты":'The Compound Lifts'}</h2>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src={cardB} />
                    <Card.Body>
                        <Card.Title className="fs-4 mb-2">{langauge?"Жим лежа":'The Bench Press'}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{langauge?"Подтяжка верхней части тела":'Upperbody lift'}</Card.Subtitle>
                        <Card.Text>
                            <p>{langauge?"Первичные мышцы:":'Primary Muscles:'}</p>
                            <ul>
                                <li>{langauge?"грудная мышца":'Pectoralis'}</li>
                                <li>{langauge?"Трицепс":'Triceps'}</li>
                            </ul>

                        </Card.Text>
                        <Button variant="secondary" href="https://stronglifts.com/bench-press/">{langauge?"Учить больше":'Learn More'}</Button>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src={cardS} />
                    <Card.Body>
                        <Card.Title className="fs-4 mb-2">{langauge?"Приземистый":'The Squat'}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{langauge?"Подтяжка нижней части тела":'Lowerbody lift'}</Card.Subtitle>
                        <Card.Text>
                        <p>{langauge?"Первичные мышцы:":'Primary Muscles:'}</p>
                            <ul>
                                <li>{langauge?"Большая ягодичная мышца":'Gluteus maximus'}</li>
                                <li>{langauge?"Квадрицепс":'Quadriceps'}</li>
                            </ul>
                        </Card.Text>
                        <Button variant="secondary" href="https://stronglifts.com/squat/">{langauge?"Учить больше":'Learn More'}</Button>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='col mx-3 p-2'>
                <Card.Img variant="top" src={cardD} />
                    <Card.Body>
                        <Card.Title className="fs-4 mb-2">{langauge?"Становая тяга":'The Deadlift'}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{langauge?"Нижняя часть тела и задняя сторона":'Lowerbody &amp; Back'}</Card.Subtitle>
                        <Card.Text>
                        <p>{langauge?"Первичные мышцы:":'Primary Muscles:'}</p>
                            <ul>
                                <li>{langauge?"Выпрямитель позвоночника":'Erector spinae'}</li>
                                <li>{langauge?"Большая ягодичная мышца":'Gluteus maximus'}</li>
                            </ul>

                        </Card.Text>
                        <Button variant="secondary" href="https://stronglifts.com/deadlift/">{langauge?"Учить больше":'Learn More'}</Button>
                    </Card.Body>
            </Card>
            
        </div>
     );
}
 
export default LiftExplorer;