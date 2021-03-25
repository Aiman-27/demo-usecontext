import React from 'react';
import Child from './child';
import logo from './logo.svg';

function Parent(props) {
  return (
    <div>
      Parent
      <Child num={props.num}></Child>   
    </div>
  );
}

export default Parent;
