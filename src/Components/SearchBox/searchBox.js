import React from 'react';
import './searchBox.css'
const SearchBox = () => {
	return (
		<div className="form-group has-search">
			<span className="fa fa-search form-control-feedback" />
			<input type="text" className="form-control" placeholder="Search" />
		</div>
	);
};

export default SearchBox;
