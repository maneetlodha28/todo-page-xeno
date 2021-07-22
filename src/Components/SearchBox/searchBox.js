import React from 'react';
import './searchBox.css'
const SearchBox = () => {
	return (
		<div class="form-group has-search">
			<span class="fa fa-search form-control-feedback" />
			<input type="text" class="form-control" placeholder="Search" />
		</div>
	);
};

export default SearchBox;
