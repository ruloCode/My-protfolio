import React from 'react';

import './ContactInfo.scss';

const ContactInfo = (props) => {
  const { label, value } = props;
  const renderIcon = (label) => {
    switch (label) {
      case 'Phone':
        return <i className='fas fa-phone-alt' />;
      case 'Email':
        return <i className='fas fa-envelope' />;
      case 'Location':
        return <i className='fas fa-map-marker-alt' />;
      default: return '';
    }
  };
  return (
    <div className='contact-info'>
      <div className='info-label'>
        <div className='icon-container'>
          {renderIcon(label)}
        </div>
        <div className='info-data'>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
