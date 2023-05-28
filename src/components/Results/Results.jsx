import './Results.css'

import Header from '../Header/Header'
import HeroImgResults from '../HeroImgResults/HeroImgResults'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../SearchResults/SearchResults'
import FooterResult from '../FooterResult/FooterResult'


const Results = () => {
  return ( 
    <>
      <Header isLoggedIn={true} />
      <HeroImgResults />
      <main className='results'>
        <SearchForm />
        <SearchResults />
      </main>  
      <FooterResult />
      
    </>
   );
}
 
export default Results;