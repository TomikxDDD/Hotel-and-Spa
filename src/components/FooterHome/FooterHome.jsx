import './FooterHome.css'

const FooterHome = () => {
  return ( 
    <footer className='footer' data-testid="footer"> 
      <div className="container">
        <h2 className='footer__h2'> Contacts CZE </h2>
        <p className='footer__p'>Graficon spol. s.r.o.</p>
        <p className='footer__p'>Senovážné náměstí 23 - 110 00 Praha 1, Czech Republic</p>
        <p className='footer__p'>Tel./Fax." 00420 222 327 470</p>
        <p className='footer__p'>E-mail: booking@graficon.cz</p>
      </div>
    </footer>
   );
}
 
export default FooterHome;