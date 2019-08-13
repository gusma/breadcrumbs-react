import React from 'react';
import './breadcrumbItem.css';

const BreadcrumbItem = (props) => {
  return (
    <div id="breadcrumb" className="breadcrumb">
      {props.name}
    </div>
  );
}

export default BreadcrumbItem;
