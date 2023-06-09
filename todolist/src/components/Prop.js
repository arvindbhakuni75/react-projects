import React from 'react';

function Prop (props) {


    return(
        <div className='app'>
            <h1>{props.profile}</h1>
            <p>{props.name}</p>
        </div>
    );
};

export default Prop;