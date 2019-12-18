import React from 'react';
import './Hello.css';

//function Hello( props ) {
const Hello = ( props ) => {
  return (
    <div className="f1 tc">
        <h1>What's up {props.greeting}!</h1>
        <p>I just rendered my first custom react component.</p>
    </div>
  );
}

export default Hello;
