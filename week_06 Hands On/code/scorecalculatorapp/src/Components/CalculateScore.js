import React from 'react';



function CalculateScore({ Name, School, total, goal }) {

const perTodec = (val) => {

return val.toFixed(2) + '%';

};


const calScore = (total, goal) => {

return perTodec(total / goal * 100);

};


return (

<div className="formatstyle">

<h1 style={{ color: 'brown' }}>Student Details</h1>


<div className="Name">

<b><span>Name:</span></b>

<span>{Name}</span>

</div>


<div className="School">

<b><span>School:</span></b>

<span>{School}</span>

</div>


<div className="Total">

<b><span>Total:</span></b>

<span>{total}</span>

<span> Marks</span>

</div>


<div className="Score">

<b>Score:</b>

<span>{calScore(total, goal)}</span>

</div>

</div>

);

}


export default CalculateScore;