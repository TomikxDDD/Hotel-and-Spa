import './LanguageBar.css'
import listOfLanguages from '../../data/languages'
import { useState } from 'react';

const LanguageBar = ({ currentLanguage, setCurrentLanguage }) => {

  const [selectingLanguage, setSelectingLanguage] = useState(false)

  // Get the flag of the currently selected language
  let currentLanguageFlagPath = ''
  listOfLanguages.forEach(language => {
    if (language.name === currentLanguage ){
      currentLanguageFlagPath = language.imgPath
    }
  })

  return ( 
    <>
      <div 
        className='languages'
        onClick={() => {
          setSelectingLanguage(!selectingLanguage)
        }}> 
          <div className="language-select-row">
            <div className="language-select-row">
              <img
                src={currentLanguageFlagPath}
                alt={`${currentLanguage} flag`}
                className='languages__img' />
              <span>{currentLanguage}</span>
            </div>

            <div className="languages-select-arrow-container">
              <img
                src="../../../imgs/icon-down-arrow.png"
                alt="icon: down arrow"
                />
            </div>
          </div>

          {selectingLanguage && <div className="languages-select">
            <ul className='languages-select__ul'>
              {listOfLanguages.map(language => {
                return(
                  <li 
                    key={language.id}
                    className='languages-select__li'
                    onClick={() => setCurrentLanguage(language.name)}>
                    <img 
                      src={language.imgPath} 
                      alt={`${language.name} flag`}
                      className='languages__img' />
                    <p className='languages__p'>{language.name}</p>
                  </li>
                )
              })}
            </ul></div>}
      </div>
      
    </>
   );
}
 
export default LanguageBar;