import React from 'react';

const Result = ({fname, sname, percentage, result}) => {
    console.log(fname)

    return (
        <div>
            <h2>{fname} and {sname} have a {percentage}% compatibility. {result}!</h2>
        </div>
    )
}



export default Result;