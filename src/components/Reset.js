import React from 'react';

function Reset() {
   const resetOperator=(...args)=>{
        // console.log(args);
       // return args;
       const filter = args.filter((a) => a > 2);
       // console.log(filter)
    return filter;
    }
   const name = resetOperator(1,2,3,4,5);
    return (
        <div>
            <p>{name}</p>
            {/*<p>{resetOperator()}</p>*/}
        </div>
    );
}

export default Reset;