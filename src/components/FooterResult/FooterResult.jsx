import './FooterResult.css'

const FooterResult = () => {

  const contactInfo = (
    <>
      <p className='footer__p'>Graficon spol. s.r.o.</p>
      <p className='footer__p'>Senovážné náměstí 23 - 110 00 Praha 1, Czech Republic</p>
      <p className='footer__p'>Tel./Fax." 00420 222 327 470</p>
      <p className='footer__p'>E-mail: booking@graficon.cz</p>
    </>
  )

  // Same styles for footers, just a different structure
  return ( 
    <footer class="footer" data-testid="footer"> 
      <div className="container footer-row">
        <div className="footer-col">
          <h2 className='footer__h2'> Contacts CZE </h2>
          {contactInfo}
        </div>
        <div className="footer-col">
          <h2 className='footer__h2'> Contacts Greece </h2>
          {contactInfo}
        </div>
        <div className="footer-col">
          <h2 className='footer__h2'> Contacts Greece </h2>
          {contactInfo}
        </div>

      </div>
    </footer>
   );
}
 
export default FooterResult;