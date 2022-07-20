import Breadcrumb from 'react-bootstrap/Breadcrumb'

const LanguageSelect = ({langauge, changeLangauge}) => {
    return ( 
        <Breadcrumb  variant='secondary'>
            <Breadcrumb.Item active = {!langauge} onClick={changeLangauge} disabled={!langauge}
            >English</Breadcrumb.Item>
            {/* <div classname ="m-5"style={{filter:'grayscale(0)'}}>🇬🇧</div> */}
            <Breadcrumb.Item 
             active= {langauge} 
             onClick={changeLangauge} 
             disabled={langauge}
            // value='russian'
            >Русский</Breadcrumb.Item> 
            {/* <div classname ="m-5"style={{filter:'grayscale(100)'}}>🇺🇦</div> */}
      </Breadcrumb>
     );
}
 
export default LanguageSelect;