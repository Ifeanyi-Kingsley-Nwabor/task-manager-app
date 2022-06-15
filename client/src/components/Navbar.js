import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://github.com/Ifeanyi-Kingsley-Nwabor/task-manager-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
