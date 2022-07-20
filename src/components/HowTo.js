import plusPlate from './assets/plus-plate.png'
import divPlate from './assets/div-plate.png'

const HowTo = ({langauge}) => {

    const weightStyle = {
        height: '200px',
        width: '200px'
    }
    return (
        <div className ="bg-primary row p-3 m-5" style={{borderRadius: '25px'}} id="howTo">
        <h4 className=" m-4 fs-2 fw-bold text-secondary">{langauge?"Как это работает":'How it works'}</h4>
            
            <div className="row">
                <p className="col-8 ps-5">{langauge?"Plate Math работает для расчета вашего":'Plate Math works to calculate your'} <strong>{langauge?"Отношение прочности к весу (КСВ)":'Strength to weight ratio (SWR)'}</strong>
                {langauge?", это очень общее измерение того, как ваши упражнения сравниваются с профессиональными тяжелоатлетами. Это приложение извлекает данные из источников, которые собирают статистические данные о спортсменах, и сортирует их по весовым категориям. В результате математика с тарелками требует, чтобы вы были близки к своему идеальному весу тела (ИМТ меньше чем 24,9 и выше 14,5) для точного измерения вашей силы.":', this a very general measurement of how your lifts compare to professional weightlifters. This application pulls data from sources which compile the satistics of Athletes and sorts them by weight class. As a result Plate Math requires you to be close to your ideal body weight (BMI lessthan 24.9 and greater than 14.5) for an accurate measurement of your strength.'}</p>
            
            <div className ="col md-auto md-auto d-flex justify-content-center">
                <img  style={weightStyle} src={plusPlate} alt="decorative"/>
            </div>


            </div>
            <h4 className=" m-4 fs-2 fw-bold text-secondary">{langauge?"Как использовать":'How to use'}</h4>
            <div className="row">
            <div className="col-8 ps-5">
                    <p className="">{langauge?"Математика тарелки не предназначена для измерения ваших навыков или трудовой этики, она просто предназначена для установления исходного уровня, с которым вы можете сравнить свои будущие расчеты КСВ.":'Plate math is not intended to be a measure of your skill or work ethic, merely it is intended to set a baseline in order for your to compare your future SWR calculations against.'}</p>
                    <p><strong>{langauge?"Учить больше":'APP USAGE:'}</strong></p>
                    <ol>
                        <li>{langauge?"Введите свой рост и вес в текстовые поля в левом верхнем углу.":'Fill out your height and weight in the textboxes in the top left'}</li>
                        <li>{langauge?"Выберите свой подъемник, нажав на одно из изображений в левом верхнем углу.":'Select your lift by clicking on one of the images in the top left'}</li>
                        <li>{langauge?"Используйте синие кнопки, чтобы установить вес данного подъема.":'Use the blue buttons to set the weight of your given lift'}</li>
                        <li>{langauge?"Нажмите оранжевую кнопку расчета и просмотрите результаты ниже.":'Press the orange calculate button and view your results below'}</li>
                    </ol>
            </div>
                
                <div className ="col md-auto d-flex justify-content-center">
                    <img  style={weightStyle} src={divPlate} alt="decorative"/>
                </div>
            </div>

            <h4 className=" m-4 fs-2 fw-bold text-secondary">{langauge?"ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ":'F.A.Q'}</h4>
            <div className="">
            <div className="row">
               <div className='col-8 ps-5 '>
                    <p className=""><strong>{langauge?"Вопрос: Насколько точна тарелка Math?":'Question: How Accurate is Plate Math'}</strong></p>
                    <p><i>{langauge?"Ответ: Математика тарелки становится более точной, чем ближе вы к своему идеальному весу тела, при идеальной массе тела математика тарелки является точным представлением вашей силы.":'Answer: Plate Math gets more accurate the closer you are to your ideal bodyweight, at your ideal bodyweight Plate Math is an accurate representation of your strength'}</i></p>
                    <p className=""><strong>{langauge?"Вопрос: Почему выбраны только эти упражнения?":'Question: Why are only these excersises choosen?'}</strong></p>
                    <p><i>{langauge?"Ответ: Жим лежа, присед и становая тяга являются стандартными упражнениями для соревнований, которые большинство спортсменов включают в свои программы, поэтому у них больше всего данных о них.":'Answer: The Bench, the squat, and the deadlift are the standard competition lifts that the majority of athletes incorporate into their routines, therefore they have the most data surrounding them'}</i></p>
                    <p className=""><strong>{langauge?"Вопрос: Как избыточный или недостаточный вес влияет на расчет?":'Question: How does being over or under ideal weight effect the calculation?'}</strong></p>
                    <p><i>{langauge?"Ответ: Если ваш вес выше идеального, то ваш коэффициент силы будет искусственно занижен. Если ваш вес ниже идеального, ваша сила будет искусственно завышена.":'Answer: If you are above your ideal weight than you strength ratio will be artificially lower. If you are below your ideal weight than your strength will be artificially inflated'}</i></p>
                </div> 
                
                <div className ="col md-auto md-auto d-flex justify-content-center">
                    <img  style={weightStyle} src={plusPlate} alt="decorative"/>
                </div>
            </div>
        
            </div>

        </div>
      );
}
 
export default HowTo;