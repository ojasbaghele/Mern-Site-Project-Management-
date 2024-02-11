import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return(
        <>
            <div className="Navbar">
                <div className="brand">
                    <h1>Site Title ✌️🐸</h1>
                </div>
                <div className="nav-links">
                <Link to="/"> Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
                </div>
            </div>
        </>
    )
}