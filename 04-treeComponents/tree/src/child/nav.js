import React from 'React';
import {NavLink as NavLinks} from 'react-router-dom';
import './nav.css'

const navbar = () => (
  <div>
    <div>
      <ul>
        <li><NavLinks className="nav" to="/">liona</NavLinks></li>
        <li><NavLinks className="nav" to="/lionb">lionb</NavLinks></li>
        <li><NavLinks className="nav" to="/lionc/hahah">lionc</NavLinks></li>
        <li><NavLinks className="nav" to="/redirct">redirct</NavLinks></li>
        <li><NavLinks to='/react'>404</NavLinks></li>
      </ul>
    </div>
  </div>
)

export default navbar