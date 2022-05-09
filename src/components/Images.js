import React from 'react';
import woman from '../images/illustration-woman-online-desktop.svg';
import pattern from '../images/bg-pattern-desktop.svg';
import box from '../images/illustration-box-desktop.svg';

const Images = () => {
    return(
        <>
            
            <div className='pareja'>
                <img src={pattern} alt="aca" className="sombras" />
                <img src={woman} alt="woman" className="wonman-desk" />
            </div>
            <img src={box} alt="box" className="box" />
            
        </>
    )
}

export default Images;