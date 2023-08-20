import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <header>
      <div className="div-container">
        <nav id="nav">
          <ul className="list-container">
            <li>
              <NavLink to={"/props"}>Props</NavLink>
            </li>
            <li>
              <NavLink to={"/state"}>State</NavLink>
            </li>
            <li>
              <NavLink to={"/events"}>Events</NavLink>
            </li>
            <li>
              <NavLink to={"/render-condicional"}>
                Renderizado Condicional
              </NavLink>
            </li>
            <li>
              <NavLink to={"/refs"}>Refs</NavLink>
            </li>
            <li>
              <NavLink to={"/context"}>Context</NavLink>
            </li>
            <li>
              <NavLink to={"/hoc"}>HOC</NavLink>
            </li>
            <li>
              <NavLink to={"/hooks"}>Hooks</NavLink>
            </li>
            <li>
              <NavLink to={"/paitingList"}>Painting list</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
