import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './Home.css';
import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>

        <main>
          <h1>Su marketplace de recolección de residuos</h1>
          <p>Ayudamos a personas a encontrar puntos de recolecta de forma eficiente.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Registre un punto de recolección</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;