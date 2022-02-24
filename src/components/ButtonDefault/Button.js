import React from 'react';

function ButtonDefault(props) {
  return (
    <div>
        <button className="btn btn-outline-primary" >{props.title}</button>
    </div>
  );
}

export default ButtonDefault;