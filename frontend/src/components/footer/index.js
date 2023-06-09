import React from 'react'
import {
    Link,
} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/user/list">UserList</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Footer