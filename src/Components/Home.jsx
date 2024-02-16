import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div >
            <Link to="/"></Link>
            <Link to="/sign">  </Link>
            <Link to="/login"></Link>
            <Link to="/profile"></Link>
            <Link to="/devtask"></Link>
        </div>
    )
}
export default Home;
