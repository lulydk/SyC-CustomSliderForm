import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';

export function Navbar () {

  const { currentUser, signOut } = useContext(AuthContext)

  return (
    <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href=''>
            <img src='icon.png' height={25}></img>
            SUEÑO Y CONSCIENCIA
          </a>
          { currentUser && <button className='btn' onClick={signOut}>Cerrar sesión</button> }
        </div>
      </nav>
  );
}
