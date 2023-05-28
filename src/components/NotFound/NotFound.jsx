import './NotFound.css'

import Header from '../Header/Header'
import FooterHome from '../FooterHome/FooterHome'

const NotFound = () => {
  return ( 
    <>
      <Header isLoggedIn={false} />
      <div 
        data-testid="notfound"
        className='not-found'> The page you are looking for has not been found </div>
      <FooterHome />
      
      </>
   );
}
 
export default NotFound;