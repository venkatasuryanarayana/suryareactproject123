import React from 'react';
import data from "../data.json";
import logo from "../logo.svg";
import logo1 from "../logo.png";
import { Link } from 'react-router-dom';

let Cards=()=>{
	let cardsData=data.details;
	console.log(cardsData);
	let images = [logo,logo1];
	return(
		<div>
		 <h1 className="text-primary">It is related to cards</h1>
		 <div className="row">
		{cardsData.map((values,index)=>(
			
           <div className="col-sm-10 col-md-4 m-1" key={index}>
           <div className="card">
           <img src={images[index]} />
           <h1>{values.card.name}</h1>
           <h2 className="text-secondary">{values.card.description}</h2>
           <a href={"mailto:"+values.card.email}>
           <h4>{values.card.email}</h4>
           </a>
           <Link to={{ pathname:"/resume",personcard:{ id: index } }} className="btn btn-primary">Click ME</Link>
           </div>
           </div>
           
		))}
		</div>
          
		</div>

		);
};

export default Cards;