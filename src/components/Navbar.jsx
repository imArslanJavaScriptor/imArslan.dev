import React from "react";

function Navbar() {
return (
    <>
    <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-foundationOrange">imArslan.dev</h1>

        <ul className="flex items-center gap-3">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
        </ul>

        <button className="btn btnPrimary">Hire Me</button>

    </nav>
    </>
)
}

export default Navbar;
