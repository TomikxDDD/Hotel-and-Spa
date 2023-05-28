import './SearchResult.css'

const SearchResult = ({ hotel, numOfNights, currency }) => {

  let stars = []

  for (let index = 0; index < hotel.numOfStars; index++) {
    stars.push(<span>&#11088;</span>)
  }

  return ( 
    <div className='results-card'>
      <div className="hotel-info">
        <div className='hotel-overview'>
          <img
            src={hotel.imagePath}
            alt='Photo of a hotel room with large bed'
            className='hotel-img' />
          <div className="hotel-info">
            <div className="hotel-name-stars">
              <h3 className='hotel__h3'>{hotel.name}</h3>
              <span className='hotel-num-of-stars'>{stars}</span>
              <img
                src='../../../imgs/icon-like.png'
                alt='Photo of a hotel room with large bed'
                className='icon icon-like' />
            </div>
            <p className='hotel-location__p'>{hotel.location.city} / {hotel.location.state}</p>
          </div>
        
        </div>
      </div>
      <div className="hotel-pricing">
        <p className='hotel-pricing__p'>
          <span className='hotel-pricing-text'>Price</span>
          <span className='hotel-pricing-price'>{(hotel.pricePerNight * numOfNights).toFixed(2)}</span>
          <span className='hotel-pricing-currency'> {currency}</span>
          <img
            src='../../../imgs/icon-info-gray.svg'
            alt='Photo of a hotel room with large bed'
            className='icon icon-info' />
        </p>
        <p className="pricing-per-nights__p">Per {numOfNights} Nights</p>
        <div className="btn-book-container">
          <button className='btn btn-book'>book</button>
        </div>
      </div>
      <div className="hotel-details">
        <nav className="hotel-details-tabs">
          <ul>
          <li className="hotel-details-tab">Description</li>
          <li className="hotel-details-tab">Images</li>
          <li className="hotel-details-tab">Map</li>
          <li className="hotel-details-tab">Reviews</li>
          </ul>
        </nav>
        <table className='hotel-details-table'>
          <tr>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>Room</th>
            <th>Board</th>
            <th>Date</th>
            <th>Cancellation Policy</th>
          </tr>
          <tr>
            <td></td>
            <td className='row-table'>
              <img
                src='../../../imgs/icon-magnify-blue.svg'
                alt='Search icon - magnifying glass'
                  className='icon icon-search-small' 
                    />Double or twine standard</td>
            <td>BB</td>
            <td>21/12/2015 - 30/01/2016</td>
            <td className='row-table'>
              <img
              src='../../../imgs/icon-info-yellow.svg'
              alt='Info icon'
              className='icon icon-info-small' 
                /> from 25/12/2016</td>
          </tr>
        </table>
        <p className='view-more row-view-more'>View more prices and board types
          <img
            src='../../../imgs/icon-arrow-right.png'
            alt='Arrow down icon'
            className='icon icon-arrow-down' 
              />
        </p>
      </div>
    </div>
   );
}
 
export default SearchResult;