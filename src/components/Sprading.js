import React from 'react';

function Spread() {
    const  number = [1,2,3];
    const newNumber = [...number, 4,5,6]
    // console.log(newNumber);
    return (
        <div>

            <h1>{newNumber}</h1>
        </div>
    );
}

export default Spread;