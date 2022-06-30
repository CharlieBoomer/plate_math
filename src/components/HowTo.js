import plusPlate from './assets/plus-plate.png'
import divPlate from './assets/div-plate.png'

const HowTo = () => {

    const weightStyle = {
        height: '200px',
        width: '200px'
    }
    return (
        <div className ="bg-primary row p-3 m-5" style={{borderRadius: '25px'}} id="howTo">
        <h4 className="text-center m-4 fs-2 fw-bold text-secondary">How it works</h4>
            <div className="">
            <div className="row">
                <p className="col-8">Plate Math works to calculate your <strong>Strength to weight ratio (SWR)</strong>, this a very general measurement of how your lifts compare to professional weightlifters.
                This application pulls data from sources which compile the satistics of Athletes and sorts them by weight class. As a result Plate Math requires you to be close to your ideal body weight (BMI less
                than 24.9 and greater than 14.5) for an accurate measurement of your strength.</p>
                <div className ="col md-auto md-auto d-flex justify-content-center">
                <img  style={weightStyle} src={plusPlate} alt="decorative"/>
                </div>
            </div>
        
            </div>
            <h4 className="text-center m-4 fs-2 fw-bold text-secondary">How to use</h4>
            <div className="row">
                <div className ="col md-auto d-flex justify-content-center">
                    <img  style={weightStyle} src={divPlate} alt="decorative"/>
                </div>
                <div className="col-8">
                    <p className="">Plate math is not intended to be a measure of your skill or work ethic, merely it is intended to set a baseline in order for your to compare your future SWR calculations against.</p>
                    <p><strong>APP USAGE:</strong></p>
                    <ol>
                        <li>Fill out your height and weight in the textboxes in the top left</li>
                        <li>Select your lift by clicking on one of the images in the top left</li>
                        <li>Use the blue buttons to set the weight of your given lift</li>
                        <li>Press the orange calculate button and view your results below</li>
                    </ol>
                </div>
            </div>
        

        </div>
      );
}
 
export default HowTo;