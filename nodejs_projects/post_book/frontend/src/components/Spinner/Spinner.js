import React from 'react';
import spinnerImage from '../../assets/spinning-loading.gif';

let Spinner = () => {
  return (
    <React.Fragment>
      <div>
        <img src={spinnerImage} alt="Loading..." className="d-block m-auto" style={{ width: '200px' }} />
      </div>
    </React.Fragment>
  );
};

export default Spinner;