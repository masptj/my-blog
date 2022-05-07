import React from "react";
import { Link } from "gatsby"

const AboutPage = () => (
    <>
    <h1>About Page</h1>

    <ul>
      <li> 
        <Link to="/" >Home</Link>
      </li>

      <li>
        <Link to="/about" activeStyle={ {color:"red"} }>About Gatsby Link</Link>
      </li>
    </ul>

    </>
)

export default AboutPage

