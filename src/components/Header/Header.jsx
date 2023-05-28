import './Header.css'

import { Link } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import LanguageBar from '../LanguageBar/LanguageBar'
import { useState } from 'react'


const Header = ({ isLoggedIn }) => {
  
  const [currentLanguage, setCurrentLanguage] = useState('English')
  
  return ( 
    <header 
      data-testid="header"
      className='header'> 
      <div className="container">
          <div className="row-header">
            <div className="col-header-logo">
              <img 
                src="../../../imgs/spa-logo.svg" 
                alt="Logo of hotel and spa" 
                className="logo"/>
            </div>
            <div className="col-header-nav">
              <div className='header__contact'>
                <span className='contact contact-phone'>
                  <img
                    src="../../../imgs/icon-phone.png"
                    alt="Telephone symbol"
                    className='icon icon-phone'
                      />
                  <span className='phone-number'>+420 778 050 055</span>
                </span>
                <span className='contact contact-email'>
                  <img
                    src="../../../imgs/icon-email.png"
                    alt="Email symbol (envelope)"
                    className='icon icon-email'
                      />
                  <a href="mailto:info@hotelandspa.com" className='email__a'><span className='email'>info@hotelandspa.com </span></a>
                </span>
              </div>
              <div className='row'>
                
                <NavBar isLoggedIn={isLoggedIn}/>
                <LanguageBar 
                  currentLanguage={currentLanguage}
                  setCurrentLanguage={setCurrentLanguage} />  
                

                {/* <select className='language__select' name="language" id="lang">
                  <option value="en">English</option>
                  <option value="cz">Czech</option>
                  <option value="svk">Slovakia</option>
                </select> */}
              </div>
            </div>
        </div>
      </div>
    </header>
   );
}
 
export default Header;