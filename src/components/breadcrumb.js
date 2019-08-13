import React from 'react';

const Breadcrumb = (props) => {
  return (
    <div className={props.className} >
      {props.name}
    </div>
  );
}

export default Breadcrumb;
