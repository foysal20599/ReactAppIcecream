import React from 'react';

function Push() {
    const  number = [1,2,3,4,5,6,7]
    const num =  number.push(8,9,10);

    console.log(num);
    return (
        <div>
            ok
            <p>{number}</p>
            <p>{num}</p>
        </div>
    );
}

export default Push;