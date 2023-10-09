import React from 'react';
import './Translation.css';
import TranslationChapters from './TranslationChapters.json';
import { Link } from 'react-router-dom';

export default function EnglishTranslationChapters() {
  const Chapter = [];
  for (let i = 0; i < 55; i++) {
    Chapter[i] = i;
  }
  return (
    <>
      <b>
        <center>
          <h1>Shamail-e-Tirmidhi</h1>
        </center>
      </b>
      <h3 style={{marginLeft:125}}>English Translation Chapters</h3>
      <ul className="list-group">
        <h5>
          {Chapter.map((index) => (
            <li
              className="list-group-item"
              style={{ backgroundColor: '#dcb460', marginBottom: '10px',borderRadius:20,marginLeft:100,marginRight:100}}
            >
              <Link
                to={'/EnglishTranslationChapters/EnglishTranslationChapter' + TranslationChapters[index].ID}
                style={{ color: '#2e2924'}}
              >
                {TranslationChapters[index].Chapters}
              </Link>
            </li>
          ))}
        </h5>
      </ul>
    </>
  );
}
