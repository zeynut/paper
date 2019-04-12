import React from 'react';
import './FooterWrap.css';
import FooterInfoWrap from './FooterInfoWrap';
import FooterCopy from './FooterCopy';

const FooterWrap = () => {
    return (
        <div className="FooterWrap">
          <FooterInfoWrap/>
          <FooterCopy/>
       </div>
    );
};

export default FooterWrap;