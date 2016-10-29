import React from 'react';

//Stateless component structure
const Button = ({theme, buttonLink, buttonText, extraClasses}) => {
  return (
      <a className={`f5 fw6 tc link hvr-outline-out-${theme} hover-black pv2 mb white bg-${theme} ${extraClasses}`} href={buttonLink}>{buttonText}</a>
  )
}

export default Button
