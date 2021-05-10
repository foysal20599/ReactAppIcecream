import React from 'react';

function Splice() {
    const  number = [1,2,3,4,5,6,7]
    const num =  number.splice(1,2);
    console.log(num);
    return (
        <div>
            <p> ok {num}</p>
        </div>
    );
}

export default Splice;