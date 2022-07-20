import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Analysis = ({isSelected, totalWeight, bodyWeight, langauge, gender}) => {
    const [swr, setSwr] = useState(0);
    
    function onRender(){
      return setSwr({totalWeight}/{bodyWeight});
    }
    
    
    function StackedExample(now) { 
        return (
          <ProgressBar>
            <ProgressBar striped variant="secondary" now={((totalWeight/bodyWeight) * 100).toFixed(2)} key={1} label={`${((totalWeight/bodyWeight) * 100).toFixed(2)}%`}/>
            <ProgressBar striped variant="primary" now={(getUpperRange((totalWeight/bodyWeight) * 100) - (totalWeight/bodyWeight) * 100).toFixed(2)} key={2} />
          </ProgressBar>
        );
      }
      function getLevel(percentage){
        if (percentage <120){
          return langauge?"необученный":'Untrained';
        }else if(percentage>= 120 && percentage<= 175){
          return langauge?"Новичок":'Novice';
        }else if(percentage>= 175 && percentage<= 210){
          return langauge?"Средний":'Intermediate';
        }else{
          return langauge?"Элита":'Elite';
        }
      }
      function getUpperRange(percentage){
        if (percentage <120){
          return 120;
        }else if(percentage>= 120 && percentage<= 175){
          return 175;
        }else if(percentage>= 175 && percentage<= 210){
          return langauge?"Средний":'Intermediate';
        }else{
          return 1000;
        }
      }
      function getLowerRange(percentage){
        if (percentage <120){
          return 0;
        }else if(percentage>= 120 && percentage<= 175){
          return 120;
        }else if(percentage>= 175 && percentage<= 210){
          return 175;
        }else{
          return 210;
        }
      }
      function getUpperLevel(percentage){
        if (percentage <120){
          return langauge?"Новичок":'Novice';
        }else if(percentage>= 120 && percentage<= 175){
          return langauge?"Средний":'Intermediate';
        }else{
          return langauge?"Элита":'Elite';
        }
      }
      function getDistrib(percentage){
        if (percentage <120){
          return '50th';
        }else if(percentage>= 120 && percentage<= 175){
          return '80th';
        }else if(percentage>= 175 && percentage<= 210){
          return '95th';
        }else{
          return '99th';
        }
      }

    return ( 
        <div className="container">
        <div className='my-5 text-center'>
         <h3 className='my-2'>{langauge?"Ты можешь сделать":'You can'} {isSelected} {((totalWeight/bodyWeight) * 100).toFixed(2)} % {langauge?"веса вашего тела":'of your body weight'}</h3>
         <h5 className='my-2'>{langauge?"Помещение вас в":'Putting you in the'}  {getDistrib(totalWeight/bodyWeight *100)} {langauge?"процентиль":'percentile'}</h5>
         {/* {console.log(totalWeight/bodyWeight * 100)} */}
         
            <div className="row my-3">
                <div className="col col-md-auto text-left">{getLevel(totalWeight/bodyWeight *100)}</div>   
                <div className='col'>{StackedExample(66)}</div>
                <div className="col col-md-auto text-right">{getUpperLevel(totalWeight/bodyWeight *100)}</div>
            </div>

            <h4>{langauge?"Ваш предполагаемый уровень физической подготовки:":'Your estimated level of fitness is:'} {getLevel(totalWeight/bodyWeight *100)}</h4>

        </div>
        </div>
     );
}
 
export default Analysis;