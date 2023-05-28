import './HeroImgHome.css'

import LoginBox from '../LoginBox/LoginBox'
import NewAccountBox from '../NewAccountBox/NewAccountBox'

const HeroImgHome = () => {
  return ( 
    <div className='hero-img-home'>
      <div className="headings-container">
        <div className="headings">
          <h2 className='headings__h2'><span className='headings__h2-first-letter'>O</span>nline booking</h2>
          <h1 className='headings__h1'><span className='headings__h1-first-letter'>H</span>otel & Spa</h1>
        </div>
      </div>
      <div className="container login-new-account">
        <LoginBox />
        <NewAccountBox />
      </div>
    </div>
   );
}
 
export default HeroImgHome;