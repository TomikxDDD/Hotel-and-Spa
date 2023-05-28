import './NavBar.css'

import { Link } from 'react-router-dom'


const NavBar = ({ isLoggedIn }) => {
  return ( 
    <nav className='nav'>
      <Link to='/' className='nav__a'> 
        <img
          src="../../../public/imgs/icon-home.svg"
          alt="Home symbol"
          className='icon icon-home'
            />
      </Link>
      <Link to='/about' className='nav__a'> About us </Link>
      <Link to='/' className='nav__a'> Be our partner </Link>
      <Link to='/' className='nav__a'> Contact us </Link>
      {isLoggedIn && <Link to='/account' className='nav__a'> 
        <div className="">
          <img
            src="../../../public/imgs/icon-user.png"
            alt="User symbol"
            className='icon icon-user'
              />
          <span>My account</span>
        </div>
      </Link>}
      {isLoggedIn && <Link to='/' className='nav__a'> 
        <div className="">
          <img
            src="../../../public/imgs/icon-logout.png"
            alt="Logout symbol"
            className='icon icon-logout'
              />
          <span>Logout</span>
        </div> </Link>}
    </nav>
   );
}
 
export default NavBar;