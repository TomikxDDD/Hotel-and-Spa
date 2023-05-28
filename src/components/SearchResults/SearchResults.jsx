import './SearchResults.css'

import hotels from '../../data/dummy_hotels'
import SearchResult from '../SearchResult/SearchResult';
import { useState } from 'react';

const SearchResults = () => {

  const [numOfNights, setNumOfNights] = useState(5)
  const [currency, setCurrency] = useState('EUR')

  const results = hotels.map(hotel => {
    return(
      <>
        <SearchResult 
          key={hotel.id}
          hotel={hotel}
          numOfNights={numOfNights}
          currency={currency}/>

      </>
    )
  })

  return ( 
    <div className='container'>
      <div className="sort-by-container row-sort-by">
        <span className='sort-by-text'>Sort by:</span>
        <span className='sort-by-price row'>
          Price 
          <img
            src="../../../public/imgs/icon-arrow-right.png"
            alt="Arrow up symbol"
            className='icon icon-arrow-up'
              />
        </span>
        <span className='sort-by-divider'>&nbsp;</span>
        <span className='sort-by-category row'>
          Category 
          <img
            src="../../../public/imgs/icon-arrow-right.png"
            alt="Arrow up symbol"
            className='icon icon-arrow-up'
              />
        </span>
      </div>
      
      <div className="search-results-container">
        {results}
      </div>
      <div className="pagination">
        <div className="pagination-arrow pagination-arrow-left">
          <img
            src="../../../public/imgs/icon-arrow-right.png"
            alt="Arrow up symbol"
            className='icon icon-arrow-left'
              />
        </div>
        <div className="pagination-page page-1 page-active">1</div>
        <div className="pagination-page page-2">2</div>
        <div className="pagination-page page-3">3</div>
        <div className="pagination-arrow pagination-arrow-right">
          <img
            src="../../../public/imgs/icon-arrow-right.png"
            alt="Arrow up symbol"
            className='icon icon-arrow-right'
              />
        </div>
      </div>

    </div>
   );
}
 
export default SearchResults;