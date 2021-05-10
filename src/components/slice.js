import React from 'react';

function Slice() {
    const  number = [1,2,3,4,5,6,7,8,9,10];
    const slice = number.slice(1,7);
    const  concat = number.concat(11,12,13);
    const spliceNumber = [1,2,3,4,5,6,7,8,9,10]
    const splice = spliceNumber.splice(2, 5,20,25)


    return (
        <div>
            <p>{number}</p>
            <h2>{concat}</h2>
            <p>{slice}</p>
            <h3>Splice: {splice}</h3>
            <h3>Splice: {spliceNumber}</h3>
        </div>
    );
}

export default Slice;