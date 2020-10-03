import React from 'react';
import data from "../data.json";

function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);
	return (
		<div className="row">
			{/* card data */}
		<div className="col-sm-10 col-md-2">
           <div className="card">
           <h1>{profile.card.name}</h1>
           <h2 className="text-secondary">{profile.card.description}</h2>
           <a href={"mailto:"+profile.card.email}>
           <h4>{profile.card.email}</h4>
           </a>
           </div>
           </div>
		   {/* get the remaing resume data */}
		   <div className="card col-sm-10 col-md-2">

           <h2>Career object</h2>
	
		   <hr/>
		   <p>{profile.career}</p>
		   </div>
		   </div>

		);
}

export default Resume;