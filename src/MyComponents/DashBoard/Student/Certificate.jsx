import React from 'react';
import ArgusCertificate from '../../../argus website/SVG/ArgusCertificate.svg';

const Certificate = ({ componentRef }) => {
  return (
    <div ref={componentRef}>
      <img src={ArgusCertificate} alt="" />
    </div>
  );
};

export default Certificate;
