const Analysis = ({isSelected}) => {
    return ( 
        <div className="container">
            <div className='my-5 text-center'>
         <h3 className='my-2'>You can {isSelected} 90% of your body weight</h3>
         <h5 className='my-2'>Putting you in the 80th percentile of men</h5>

         
         
            <div className="row my-3">
                <div className="col col-md-auto text-left">Untrained</div>   
                <div className="col bg-primary d-flex align-items-center justify-content-center"> 50%</div>
                <div className="col bg-secondary">&nbsp;</div>
                <div className="col col-md-auto text-right">Novice</div>
            </div>

            <h4>Your estimated level of fitness is: Untrained</h4>

        </div>
        </div>
     );
}
 
export default Analysis;