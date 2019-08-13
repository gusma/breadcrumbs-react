import React from 'react';
import Breadcrumb from './components/breadcrumb';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super (props);
    
  }

render() {

  return(
    <div className="breadcrumb">
    <Breadcrumb className="main" name="Link 1" />
    <Breadcrumb name="Link 2" />
    <Breadcrumb name="Link 3" />
    </div>
    
  )

}
  
}

export default App;