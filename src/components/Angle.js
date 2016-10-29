import React from 'react';

//Stateless component structure
const Angle = ({theme, page}) => {
  return (
    <div className={`angle coolbackground w-100 absolute`}>
      <div className={`${page}-angle-height ${theme}-gradient`}></div>
    </div>
  )
}

export default Angle
