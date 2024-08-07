    // Imports the components
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            {/* Navigation links for the Home and About pages */}
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>

            <div>
                <NavLink to='/about'>About</NavLink>
            </div>

        </div>
    );

}

export default NavBar;