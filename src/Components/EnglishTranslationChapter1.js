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


export default function EnglishTransationChapter1() {
  
  const navigate = useNavigate();
  
  const EnglishTranslationChapter2 = () => {
      navigate('/EnglishTranslationChapters/EnglishTranslationChapter2')
  }

 const loop1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]

   const [buttonIcons, setButtonIcons] = useState(Array.from({ length: Thadith.length }, () => faCopy));
   // eslint-disable-next-line
  const [showAlert, setShowAlert] = useState(false);

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
  };
  return (
    <>
    <center><h1>English Translation</h1></center><br />
    <center><h2>Chapter 1. The Noble Features Of Rasoolullah </h2> </center>
    {/* hadith container */}
     {
      loop1.map((loop,index) => (  
        <div className="container">
          <br />
          <h3 id={'Hadith'+ (loop+1)} >Hadith {Thadith[loop].Hadith_No}</h3>
          <h5>Arabic</h5>
          {/* Arabic hadith container */} 
          <div className="Arabic">
           <p> {Thadith[loop].AR}</p>
          </div>
          {/* Arabic hadith container closed*/}
      <div className="Reference">
           <p><b>Reference: </b>{HadithRef[loop].Reference}<br />
           <b>In-book reference: </b>{HadithRef[loop].Book_Reference}</p>
      </div>
          {/* English hadith container */} 
          <h5 > English Translation</h5>
          <div className="EnglishTranslation"><p>{Thadith[loop].ET}</p>
          <button onClick={() => copyToClipboard(loop)} ><FontAwesomeIcon icon={buttonIcons[loop]} size="1x"></FontAwesomeIcon></button>&nbsp;&nbsp;
          <button onClick={()=>handleShareClick(loop)}>
          <FontAwesomeIcon icon={faShare} size="1x"></FontAwesomeIcon>
        </button>
    {/* eslint-disable-next-line */}
      <h6><HashLink to={'/UrduTranslationChapters/UrduTranslationChapter1' +'/#Hadith'+(loop+1)} style={{ color:"black"}}>View Urdu Translation</HashLink></h6>
      {/* eslint-disable-next-line */}
      <h6><HashLink to={'/WordToWordTranslationChapters/WordToWordTranslationChapter1' +'/#Hadith'+(loop+1)} style={{ color:"black"}}>View Word-By-Word Grammar</HashLink></h6>

           </div>
           </div>
          /* English hadith container closed*/

        /*hadith container closed */  

        ))
      }
      <br />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
           <button class="NextButton" type="button" onClick = {EnglishTranslationChapter2} >View Next Chapter</button>
           </div>
   </>
  )
}
