import React from 'react';
import './breadcrumb.css'
import BreadcrumbItem from './breadcrumbItem';

class Breadcrumb extends React.Component {
  constructor(props) {
    super (props);
    
  }

render() {

  return(
    <div className="breadcrumbs">
    <BreadcrumbItem className="main" name="Link 1" />
    <BreadcrumbItem name="Link 2" />
    <BreadcrumbItem name="Link 3" />
    </div>
    
  )

}
  
}

export default Breadcrumb;