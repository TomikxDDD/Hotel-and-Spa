import './SearchForm.css'

const SearchForm = () => {

  return ( 
    <div className='container'>
      <div className="tabs">
        <div className="tab tab-search-products">
          <div className="tab-top-strip active-strip"></div> 
          <span className='tab-span active'>Search products</span>
          </div>
        <div className="tab tab-list-of-reservations">
          <div className="tab-top-strip"></div> 
            <span className='tab-span'>List of reservations</span>
          </div>
        <div className="tab tab-send-task">
        <div className="tab-top-strip"></div> 
          <span className='tab-span'>
            <img
            src="../../../public/imgs/icon-send-task.svg"
            alt="Send task symbol - paper with mark"
            className='icon icon-send-task'
              />Send task</span>
          </div>
          
          
      </div>
      <form action="" className='search-form'>
        <div className="search-form-grid">
          {/*  */}
          <label htmlFor="destination">Destination:</label>
          <select required id='destination'>
            <option disabled selected hidden value="" className='option-placeholder'>Select</option>  
            <option value="prague">Prague</option>  
            <option value="brno">Brno</option>  
            <option value="ostrava">Ostrava</option>  
          </select>
          {/*  */}
          <label htmlFor="type">Type:</label>
          <select required name="type" id="type">
            <option disabled selected hidden value="">Select</option>  
            <option value="type1">Type1</option>
            <option value="type2">Type2</option>
            <option value="type3">Type3</option>
          </select>
          {/*  */}
          <label htmlFor="indication">Indication</label>
          <select required name="indication" id="indication">
            <option disabled selected hidden value="">Select</option>  
            <option value="indication1">indication1</option>
            <option value="indication2">indication2</option>
            <option value="indication3">indication3</option>
          </select>
          {/*  */}
          <label htmlFor="date-from">Date from:</label>
          <input 
            required
            type="date" 
            id='date-from' 
            value="2017-06-01" />
          {/*  */}
          <label htmlFor="date-to">To: </label>
          <input 
            required
            type="date" 
            id='date-to'
            value="" />
          {/*  */}
          <label htmlFor="num-of-adults">Adults: </label>
          <select required name="num-of-adults" id="num-of-adults">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          {/*  */}
          <label htmlFor="num-of-children">Childs: </label>
          <select required name="num-of-children" id="num-of-children">
            <option disabled selected hidden value="0">none</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          {/*  */}
          <label htmlFor="category">Caregory: </label>
          <select required name="category" id="category">
            <option disabled selected hidden value="">Select</option>  
            <option value="2-stars">2-stars</option>
            <option value="3-stars">3-stars</option>
            <option value="4-stars">4-stars</option>
            <option value="5-stars">5-stars</option>
          </select>
        </div>
        <div className="row more-options-search">
          <p className='row more-options-search__p'>More Options
            <img
            src="../../../public/imgs/icon-arrow-right.png"
            alt="down arrow symbol"
            className='icon icon-down-arrow'
              /></p>

          <button className='btn-search row'>
            <img
              src="../../../public/imgs/icon-magnify.svg"
              alt="Magnifying glass symbol"
              className='icon icon-magnify'
                />
            <span>Search</span>
          </button>

        </div>
      </form>
    </div>
   );
}
 
export default SearchForm;