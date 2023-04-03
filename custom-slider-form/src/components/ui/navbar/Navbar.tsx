import './Navbar.css'

export function Navbar () {
  return (
    <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href=''>
            <img src='icon.png' height={25}></img>
            SUEÑO Y CONSCIENCIA
          </a>
          {/* <button className='btn'>Acerca de</button> */}
        </div>
      </nav>
  );
}
