import React from 'react';

function Map() {
    const map = [1,2,3,4,5];
    const newMap = map.map((num)=>{
        return (num*2)
    })
    return (
        <div>
            <h1>Map: {newMap}</h1>
        </div>
    );
}

export default Map;