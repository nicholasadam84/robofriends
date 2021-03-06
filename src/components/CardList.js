import React from 'react';
import Card from './Card';
//import { robots } from './robots';

const CardList = ( {robots} ) => {
    
    //FAKE ERROR
    // if (true) {
    //     throw new Error('Nooo!');
    // }

    const cardArray = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
    });
    
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;


//combine under one return? 