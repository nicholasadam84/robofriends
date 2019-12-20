import React from 'react';

//could also be const Card = ( { props } ) => { //and then use props.id etc.
const Card = ( {id, name, username, email} ) => {
    return (
        
        <div className={`tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5`}>
            
                <h2>{username}</h2>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <h2>{name}</h2>
                <p>{email}</p>
            
        </div>
        
    );
}

export default Card;