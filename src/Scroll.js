import React from 'react';

//Learned Props, Learned State, Time for Children
//Used for wrapping components like <Scroll> </Scroll>
//Scroll can use Children to render its children
//We use props here because EVERY react component has a prop called children.
//children looks confusing but does contain type: CardList 
const Scroll = (props) => {
    return (
       <div style={{overflowY: 'scroll', border: '2px solid black', height: '800px' }}>
           {props.children}
       </div>
    );
}

export default Scroll;