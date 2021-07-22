import React from 'react';
import { MdCheckCircle, MdFiberManualRecord } from 'react-icons/md';

const CompletedList = ({ completed }) => {
	return (
		<div className="container mt-5 container-list rounded  border ">
			<h5 className="secondary-heading">Completed</h5>
			<div className="p-2  border-black-25 border-bottom" />

			<div className="row m-1 p-1" />

			<ul className="list-group">
					{completed.map((item, index) => (
						<li key={index} className="list-group-item borderless">
							<span className="float-left tick-icon">
								<MdCheckCircle />
							</span>
							<del>{item.title}</del>{' '}
							<small className="text-muted description" style={{padding:20+"px"}}>
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
