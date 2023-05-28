import './Login.css'
import Header from '../Header/Header'
import HeroImg from '../HeroImgHome/HeroImgHome'
import FooterHome from '../FooterHome/FooterHome'



const Login = () => {
  return ( 
    <>
      <Header isLoggedIn={false} />
      <HeroImg />
      <FooterHome />
    </>
   );
}
 
export default Login;