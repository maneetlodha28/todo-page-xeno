import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, Button, DropdownMenu, DropdownItem } from 'reactstrap';

const menu = [ 'Delete', 'Duplicate', 'Add Reminder', 'Add comment' ];
const Dropdown = () => {
	const [ dropdownOpen, setOpen ] = useState(false);

	const toggle = () => setOpen(!dropdownOpen);
	return (
		<div>
			<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
				<Button id="caret" outline color="secondary" className="border">
					Edit
				</Button>
				<DropdownToggle split outline color="secondary" border="true" />
				<DropdownMenu right>
					{menu.map((item, index) => (
						<DropdownItem key={index} disabled>
							{item}
						</DropdownItem>
					))}
				</DropdownMenu>
			</ButtonDropdown>
		</div>
	);
};

export default Dropdown;
