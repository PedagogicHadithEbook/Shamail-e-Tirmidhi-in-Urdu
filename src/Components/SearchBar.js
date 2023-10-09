import React, { useState } from 'react';
import hadithData from './EnglishUrduTranslation.json';
import './Translation.css';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState(['English']); // Default to English
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const keyword = searchQuery.toLowerCase();
    const matchingHadiths = [];

    if (!keyword) {
      setError('Please enter a keyword');
      setSearchResults([]); // Clear search results if keyword is empty
      return;
    }

    if (selectedLanguages.length === 0) {
      setError('Please select the language from the above given options');
      setSearchResults([]);
      return;
    }

    hadithData.forEach((hadith) => {
      let fieldText = '';

      selectedLanguages.forEach((selectedLanguage) => {
        switch (selectedLanguage) {
          case 'English':
            fieldText += hadith.ET.toLowerCase();
            break;
          case 'Urdu':
            fieldText += hadith.UT.toLowerCase();
            break;
          case 'Arabic':
            fieldText += hadith.AR.toLowerCase();
            break;
          default:
            fieldText += hadith.ET.toLowerCase();
        }
      });

      if (fieldText.includes(keyword)) {
        matchingHadiths.push(hadith);
      }
    });

    if (matchingHadiths.length > 0) {
      setSearchResults(matchingHadiths);
      setError('');
    } else {
      setSearchResults([]);
      setError('No matching Hadiths found');
    }
  };

  const handleLanguageCheckboxChange = (language) => {
    const updatedLanguages = [...selectedLanguages];
    if (updatedLanguages.includes(language)) {
      updatedLanguages.splice(updatedLanguages.indexOf(language), 1);
    } else {
      updatedLanguages.push(language);
    }
    setSelectedLanguages(updatedLanguages);
    if (updatedLanguages.length === 0) {
      setSearchResults([]);
      setSearchQuery('');
    }
  };

  const highlightKeyword = (text, keyword) => {
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === keyword.toLowerCase() ? (
            <mark style={{ backgroundColor: '#dcb460' }} key={index}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="search-hadith-page">
      <center>
        <h1>Search Hadith</h1>
      </center>
      <center>
        <p>Exploring the Treasures of Wisdom: Your Hadith Search Journey Begins Here!</p>
      </center>
      <center>
        <h3>Select Language</h3>
      </center>
      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            value="Arabic"
            checked={selectedLanguages.includes('Arabic')}
            onChange={() => handleLanguageCheckboxChange('Arabic')}
          />
          Arabic Language
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            value="Urdu"
            checked={selectedLanguages.includes('Urdu')}
            onChange={() => handleLanguageCheckboxChange('Urdu')}
          />
          Urdu Language
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            value="English"
            checked={selectedLanguages.includes('English')}
            onChange={() => handleLanguageCheckboxChange('English')}
          />
          English Language
        </label>
      </div>

      <center>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setError('');
            setSearchQuery(e.target.value);
            if (!e.target.value) {
              setSearchResults([]);
            }
          }}
          placeholder="Enter a keyword"
        />
      </center>
      <p></p>

      <center>
        <button onClick={handleSearch}>Search</button>
      </center>

      <div className="search-results">
        {searchResults.map((hadith, index) => (
          <div key={index} className="container">
            <br />
            <h3>Hadith {hadith.Hadith_No}</h3>

            {selectedLanguages.includes('Arabic') && (
              <>
                <h5>Arabic</h5>
                <div className="Arabic">
                  {highlightKeyword(hadith.AR, searchQuery)}
                </div>
              </>
            )}

            {selectedLanguages.includes('Urdu') && (
              <>
                <h5>Urdu Translation</h5>
                <div className="UrduTranslation">
                  {highlightKeyword(hadith.UT, searchQuery)}
                </div>
              </>
            )}

            {selectedLanguages.includes('English') && (
              <>
                <h5>English Translation</h5>
                <div className="EnglishTranslation">
                  {highlightKeyword(hadith.ET, searchQuery)}
                </div>
              </>
            )}
          </div>
        ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

