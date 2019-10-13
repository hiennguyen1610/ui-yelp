 import React from 'react'

const Addresses = ({ addresses }) => {
  return (
	<div>
	  <center><h1>Address List</h1></center>
	  {addresses.map((address) => (
		<div class="card">
		  <div class="card-body">
			<h5 class="card-title">{address.name}</h5>
			<p class="card-text">{address.type}</p>
			<p class="card-text">{address.location}</p>
			<p class="card-text">{address.desc}</p>
		  </div>
		</div>
	  ))}
	</div>
  )
};

export default Addresses