import React from 'react';
import { MdCheckCircle, MdFiberManualRecord } from 'react-icons/md';

const CompletedList = ({ completed }) => {
	console.log(completed, 'completed');
	return (
		<div class="container mt-5 container-list rounded  border ">
			<h5 class="secondary-heading">Completed</h5>
			<div class="p-2  border-black-25 border-bottom" />

			<div class="row m-1 p-1" />

			<ul class="list-group">
					{completed.map((item, index) => (
						<li key={index} class="list-group-item borderless">
							<span className="float-left tick-icon">
								<MdCheckCircle />
							</span>
							<del>{item.title}</del>{' '}
							<small class="text-muted description" style={{padding:20+"px"}}>
								<MdFiberManualRecord />
							<span style={{padding:20+"px"}}>Task completed on 20 July, 2020</span>
							</small>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default CompletedList;
