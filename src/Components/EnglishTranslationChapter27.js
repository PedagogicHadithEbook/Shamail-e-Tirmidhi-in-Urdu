import React,{useState} from 'react';
import Thadith from './EnglishUrduTranslation.json';
import HadithRef from './Hadith_References.json';
import { HashLink } from 'react-router-hash-link';
import copy from "copy-to-clipboard";   
import "./Translation.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function EnglishTranslationChapter27() {
  const navigate = useNavigate();
  const EnglishTranslationChapter26 = () => {
    navigate('/EnglishTranslationChapters/EnglishTranslationChapter26')
}
  
  const EnglishTranslationChapter28 = () => {
      navigate('/EnglishTranslationChapters/EnglishTranslationChapter28')
  }

 const loop2=[174,175,176]
 const [buttonIcons, setButtonIcons] = useState(Array.from({ length: Thadith.length }, () => faCopy));
 // eslint-disable-next-line
const [showAlert, setShowAlert] = useState(false)
const copyToClipboard = (loop) => {
  // eslint-disable-next-line
 copy(Thadith[loop].AR + '\n' + '\n' + Thadith[loop].ET + '\n\nReference: ' + HadithRef[loop].Reference + '\nIn-book reference: ' + HadithRef[loop].Book_Reference);
 setShowAlert(true);
 const newButtonIcons = [...buttonIcons];
 newButtonIcons[loop] = faCheck;
 setButtonIcons(newButtonIcons);

 setTimeout(() => {
   setShowAlert(false);
   newButtonIcons[loop] = faCopy;
   setButtonIcons(newButtonIcons);
 }, 500);
};

const handleShareClick = (loop) => {
  // eslint-disable-next-line
  const textToShare = Thadith[loop].AR + '\n' + '\n' + Thadith[loop].ET + '\n\nReference: ' + HadithRef[loop].Reference + '\nIn-book reference: ' + HadithRef[loop].Book_Reference ;
  if (navigator.share) {
    navigator.share({
      title: 'Share Hadith',
      text: textToShare,
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.error('Error sharing:', error));
  } else {
    alert('Web Share API not supported in this browser');
  }
}

  return (
      <>
       <center><h1>English Translation</h1></center><br />
    <center><h2>Chapter 27. Rasoolullah Performing Wudu At The Time Of Eating</h2> </center>

    {
      loop2.map((loop,index) => (  
        <div className="container">
          <br />
          <h3 id={'Hadith'+ (loop+1)} >Hadith {Thadith[loop].Hadith_No}</h3>
          <h5>Arabic</h5>
          {/* Arabic hadith container */} 
          <div className="container1">
           <p> {Thadith[loop].AR}</p>
          </div>
          {/* Arabic hadith container closed*/}
          <div className="Reference">
           <p><b>Reference: </b>{HadithRef[loop].Reference}<br />
           <b>In-book reference: </b>{HadithRef[loop].Book_Reference}</p>
      </div>
          {/* English hadith container */} 
          <h5 >English Translation</h5>
          <div className="EnglishTranslation"><p>{Thadith[loop].ET}</p>
          <button onClick={() => copyToClipboard(loop)} ><FontAwesomeIcon icon={buttonIcons[loop]} size="1x" ></FontAwesomeIcon></button>&nbsp;&nbsp;
          <button onClick={()=>handleShareClick(loop)}>
          <FontAwesomeIcon icon={faShare} size="1x" color='black' ></FontAwesomeIcon>
        </button>
    {/* eslint-disable-next-line */}
      <h6><HashLink to={'/UrduTranslationChapters/UrduTranslationChapter27' +'/#Hadith'+(loop+1)} style={{ color:"black"}}>View Urdu Translation</HashLink></h6>
      {/* eslint-disable-next-line */}
      <h6><HashLink to={'/WordToWordTranslationChapters/WordToWordTranslationChapter27' +'/#Hadith'+(loop+1)} style={{ color:"black"}}>View Word-By-Word Grammar</HashLink></h6>

           </div>
           </div>
          /* English hadith container closed*/

        /*hadith container closed */  

        ))
      }
      <br />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
           <button class="PreviousButton" type="button" onClick = {EnglishTranslationChapter26} >View Previous Chapter</button>
           <div style={{ marginLeft: '700px' }}></div> {/* Add margin between buttons */}
        <button className="NextButton" type="button" onClick={EnglishTranslationChapter28}>
          View Next Chapter
        </button>
      </div>

    </>
  )
}
