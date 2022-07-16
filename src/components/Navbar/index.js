import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">teste</NavLogo>
				<h1>teste</h1>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;