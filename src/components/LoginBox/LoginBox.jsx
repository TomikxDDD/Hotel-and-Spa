import './LoginBox.css'

import { Link } from 'react-router-dom'


const LoginBox = () => {
  return ( 
    <div className='login-box'>
      <h2 className='login-box__h2'>
        <img 
          src="../../../imgs/icon-login.png" 
          alt="Login symbol" 
          className='icon-login'
            /> Login into your account 
      </h2>
      <form action="" className='form__login'>
        <input type="text" placeholder='User name' />
        <input type="password" placeholder='Password' />
        <div className='row'>
          <Link className='row a__forgotten-password' to={'/newPassword'}>Forget your password?</Link>
          
          <Link to='/results' className="col btn__home-page__a"><button className='btn__home-page' id="btn__login" onClick={() => preventDefault()}> login </button></Link>
        </div>
      </form>
    </div>
   );
}
 
export default LoginBox;