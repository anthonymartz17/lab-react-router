import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets/all">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
/*
/pets/all/1
/pets/cats/1
/pets/cats/1
/pets/dogs/2
*/