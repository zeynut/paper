import React from 'react';
import FooterInfo1 from './FooterInfo1';
import FooterInfo2 from './FooterInfo2';
import FooterInfo3 from './FooterInfo3';
import './FooterInfoWrap.css';

const FooterInfoWrap = () => {
    return (
        <div className='FooterInfoWrap'>
            <FooterInfo1/>
            <FooterInfo2/>
            <FooterInfo3/>
        </div>
    );
};

export default FooterInfoWrap;