import PropTypes from 'prop-types'


const ImageGrey = ({source, alternate, text , isSelected, height, width, onSelected, value, test1}) => {
    //  const imageClick = () => {
    // //    const oldValue = isSelected
        
    //     console.log(value)
    //     console.log(isSelected)
    //     return value
         
    //  }
    
    return ( 
        <div className='container' onClick={() =>onSelected(value)}>
            <img src={source} alt={alternate} style={value !== isSelected ? {filter: "grayscale(100%)"} : {filter: "grayscale(0%)"} } height ={height} width={width} />
            <figcaption className='text-center'>{text}</figcaption>
        </div>
     );
}
 ImageGrey.defualtProps = {
    isSelected: false,
    text: "No Text",
 }

 ImageGrey.propTypes = {
    // source: PropTypes.string,
    alternate: PropTypes.string,
    text: PropTypes.string,
    // isSelected: PropTypes.bool,
    
 }
export default ImageGrey;