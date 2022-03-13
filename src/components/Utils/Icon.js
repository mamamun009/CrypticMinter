import React from 'react';
import { ReactSVG } from 'react-svg';

// displays svg icon
const Icon = ({ icon, className, style, containerClass, ...props }) => {
  return (
    <div className={containerClass} {...props}>
      <ReactSVG
        src={icon}
        className={`fill-current ${className}`}
        style={style}
      />
    </div>
  );
};

export default Icon;
