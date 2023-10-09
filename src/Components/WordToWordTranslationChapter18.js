import React, { useState } from 'react';
import Tippy from "@tippyjs/react";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import "tippy.js/dist/tippy.css";
import "./Translation.css";
import hadith1 from "./EnglishUrduTranslation.json";
import HadithRef from './Hadith_References.json';

import Whadith1 from "./lafz.json";
import './Table.css';

export default function WordToWordTranslationChapter18() {

  const navigate = useNavigate();
  
  const WordToWordTranslationChapter17 = () => {
    navigate('/WordToWordTranslationChapters/WordToWordTranslationChapter17')
} 
  const WordToWordTranslationChapter19 = () => {
      navigate('/WordToWordTranslationChapters/WordToWordTranslationChapter19')
  } 
 //styling for simple text
  const mystyle = {
    margin: 0,
    display: "inline",
    textAlign: "right",
  };
 //styling for hover text
  const mystyle1 = {
    margin: 0,
    display: "inline",
    color: "#996c2e",
    textAlign: "right",
    
  };
  // var for to loop all hadith in chapter
  const loop1=[111,112,113,114]
  //var to store all heading in lafz.json for word by word Grammer
  const checkBox_label_array=["لفظ","ماده","معنى","باب/مصدر","سه-اقسام","شش-اقسام","هفت-اقسام"]
  const checkBox_label_array1=["هفت-اقسام","شش-اقسام","سه-اقسام","باب/مصدر","معنى","ماده","لفظ"]
 

  var HadithNoWordlist = [] //to Display Hadith Accordng to hadithNo 
  var TabelRowContent=[] //To store content of row in a Table
  var includewordsGrammer=[] // to store only specific hadith words included in lafz.json and Hadith in EnglishUrduTranslation
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  
 //To change state of Checkbox
  function handleCheckboxChange(event) {
   const checkboxValue = event.target.value;
    //selected Checkbox in initial
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } 
    //selected Checkbox after uncselecting or selecting new checkbox
    else {
      setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== checkboxValue));
    }
  }
  //  WordBYWordGrammer function includes selected checkbox heading that are also the heading value(selected ones only) in lafz.json for specific word of Hadith
  function WordByWordGrammerChecBox(s,e,loop1) {
    var check1=[]
    var TippyContent=[] //Variable to store the data to be displayed for hover effect content
    var check = hadith1[loop1].AR.split(' '); //split the Arabic Hadith for String matching (to display only hover content on the hadith words included in lafz.json heading  لفظ )   
    let NextWordGrammar=s // for looping by moving to the next index of Hadith no heading in lafz.json to store and display content of that hadith no specific word heading 
    HadithNoWordlist=null //make it null to store next hadith
    includewordsGrammer=null//make it null to include next hadith specific word
   
    for(let i=s;i<=e;i++)
    { TabelRowContent[i]=i // to display rows on table
      includewordsGrammer=includewordsGrammer+ " "+  Whadith1[i].لفظ //to include all specfic word of hadithno heading لفظ in lafz.json for string matching
    }  
    // to make a hadith list null to add only next hadith 
    HadithNoWordlist=[]
     
    // loop untill all the hadith words are added in the hadith list
    for (let i=0;i<check.length;i=i+1){ 
    //remove the previous hadith content to add new hadith content      
    TippyContent = []
  
     //while looping if any hadith word in hadith matches with heading of hadith word in lafz.json , 
     // then it will display content of that hading heading value through hover effect and also add that hadth word in hadithNoWordlist using push function
     if ( includewordsGrammer.includes(check[i])){
      if(check1.includes(check[i])){
        HadithNoWordlist.push(
          <p style={mystyle}className = "hoverEffectWord"> { " "+check[i]+ " "}</p>)
      }
      else{
        
        check1=check1+ check[i]
        for(let t=0;t<selectedCheckboxes.length;t++){
          TippyContent += "    "+ selectedCheckboxes[t] + " :   " + Whadith1[NextWordGrammar][selectedCheckboxes[t]] + "   ";
          }
          HadithNoWordlist.push(
          <Tippy content= {TippyContent} >
          <p style={mystyle1} className = "hoverEffectWord">{" "+ check[i] + " " }</p>
          </Tippy>)
        NextWordGrammar=NextWordGrammar+1
      }

    
      
      }
     //else is word does not match it simply add that hadith word in the HadithNoWordList
     else
      { 
        HadithNoWordlist.push(
        <p style={mystyle}className = "hoverEffectWord"> { " "+check[i]+ " "}</p>)
        
      }
      
      }
      
    return (
      //to Display Hadith According to HadithNo 
      <p>{HadithNoWordlist}</p>
    )
  } 
  //  WordBYWordGrammer function includes all the heading value in lafz.json for specific word of Hadith
  function WordByWordGrammer(s,e,loop1) {
    var check1=[]
  
    var TippyContent=[]//Variable to store the data to be displayed for hover effect content
    //split the Arabic Hadith for String matching (to display only hover content on the hadith words included in lafz.json heading  لفظ )   
    var check = hadith1[loop1].AR.split(' ');
    let NextWordGrammar=s// for looping by moving to the next index of Hadith no heading in lafz.json to store and display content of that hadith no specific word heading 
    HadithNoWordlist=null//make it null to store next hadith
    includewordsGrammer=null//make it null to include next hadith specific word
      
    for(let i=s;i<=e;i++)
    { TabelRowContent[i]=i// to display rows on table
      includewordsGrammer=includewordsGrammer+ " "+  Whadith1[i].لفظ//to include all specfic word of hadithno heading لفظ in lafz.json for string matching
    }  
    // to make a hadith list null to add only next hadith 
    HadithNoWordlist=[]
   
    // loop untill all the hadith words are added in the hadith list
    for (let i=0;i<check.length;i=i+1){ 
      
    //remove the previous hadith content to add new hadith content       
    TippyContent = []
    //while looping if any hadith word in hadith matches with heading of hadith word in lafz.json , 
    // then it will display content of that hading heading value through hover effect and also add that hadth word in hadithNoWordlist using push function
     if ( includewordsGrammer.includes(check[i])){
      

      if(check1.includes(check[i])){
          HadithNoWordlist.push(
          <p style={mystyle}className = "hoverEffectWord"> { " "+check[i]+ " " }</p>)
          
      }
      else{
        
        check1=check1+ check[i]
        for(let t=0;t<checkBox_label_array.length;t++){
          TippyContent += "    "+ checkBox_label_array[t] + " :   " + Whadith1[NextWordGrammar][checkBox_label_array[t]] + "   ";
          }
          HadithNoWordlist.push(
            <Tippy content= {TippyContent}>
            <p style={mystyle1} className = "hoverEffectWord">{" "+ check[i] +" "}</p>
            </Tippy>) 
            NextWordGrammar=NextWordGrammar+1
      }

      
      }
     //else is word does not match it simply add that hadith word in the HadithNoWordList 
     else
      { 
        HadithNoWordlist.push(
        <p style={mystyle}className = "hoverEffectWord"> { " "+check[i]+ " " }</p>)
        
      }
      
      }
    //to Display Hadith According to HadithNo   
    return (
      
      <p>{HadithNoWordlist}</p>
    )
  }
 
  return (
    <>
  <center><h1>Word-By-Word Grammar</h1></center><br />
  <div className="container">
    <center><h2>Chapter 18. The Lungi Of Rasoolullah</h2><br /></center>
   
   {/* Adding Checkbox */}
   <div style={{
  textAlign: 'right',
  padding: '1%',
  fontSize: 'larger',
  fontFamily: 'Amiri, serif',
  fontWeight: 'bold',
  fontStyle: 'normal'
}}>
  {checkBox_label_array.map((item, index) => (
    <label style={{ display: 'inline-block', marginRight: '70px' }}>
      <input
        type="checkbox"
        style={{}}
        id={item}
        name={item}
        value={item}
        onChange={handleCheckboxChange}
      />
      &nbsp;
      {item}
    </label>
  ))}
</div>
 
   <br/>
   <br/>
   {/* Word By Word Grammer Hadith Displaying index wise using a map function loop */}
    <div style={{ height: '1000px',overflow: 'auto'}}> 
    {
      loop1.map((loop1,index) => (  
      <div>
      <br/>
      <h3 id={'Hadith'+ (loop1+1)}>Hadith {loop1+1}</h3>
      <h3>Arabic</h3>
      <div>
   {/* Using Ternary Operator, if any Checkbox is selected it will only display that checkbox value otherwise it will display 
    all wordbyword heading value on lafz.json file word   */}
       {
       (selectedCheckboxes.length>0) ?
      // if part
       <div>
        {/*loop1 is the Hadith NO 
         Sindex : is Startindex used in EnglishUrduTranslation.json for next hadith start index used in lafz.json 
         while Eindex for next hadith closing index , So data of specific hadith in lafz.json is shown*/}
         <div className="container1">{WordByWordGrammerChecBox(hadith1[loop1].Sindexlafz,hadith1[loop1].Eindexlafz,loop1) }</div>
         <div className="Reference1">
           <p><b>Reference: </b>{HadithRef[loop1].Reference}<br />
           <b>In-book reference: </b>{HadithRef[loop1].Book_Reference}</p>
           {/* eslint-disable-next-line */}
         <h6><HashLink to={'/UrduTranslationChapters/UrduTranslationChapter18' +'/#Hadith'+(loop1+1)} style={{ color:"black"}}>View Urdu Translation</HashLink></h6>
        {/* eslint-disable-next-line */}
         <h6><HashLink to={'/EnglishTranslationChapters/EnglishTranslationChapter18' +'/#Hadith'+(loop1+1)} style={{ color:"black"}}>View English Translation </HashLink></h6>
      </div>
         

           <div> 
            {/* Display Data in Table form */}
             <table className='.tableContainer'>
            {/* Table Heading */}
              <thead>
                 <tr>
                  {/* include only selected Checkbox  value for wordbyword Grammer */}
                   {selectedCheckboxes.map((item, index) => (
                   <th>{ selectedCheckboxes[index]}</th>
                    ))} 
                 </tr>
              </thead> 
            {/* Table Body */}
              <tbody>
                {TabelRowContent.slice(hadith1[loop1].Sindexlafz, hadith1[loop1].Eindexlafz+1).map((item2,index2) => (
         
                 <tr>
                  { selectedCheckboxes.map((item, index) =>
                    (<td>{Whadith1[item2][selectedCheckboxes[index]]}</td>))}
                 </tr>
           
                ))} 
      
              </tbody>  
            </table>
           </div>
       </div>
  
        :
        // else part
        <div>
         {/*loop1 is the Hadith NO 
         Sindex : is Startindex used in EnglishUrduTranslation.json for next hadith start index used in lafz.json 
         while Eindex for next hadith closing index , So data of specific hadith in lafz.json is shown*/}
         <div className="container1">{WordByWordGrammer(hadith1[loop1].Sindexlafz,hadith1[loop1].Eindexlafz,loop1) }</div>
         <div className="Reference1">
           <p><b>Reference: </b>{HadithRef[loop1].Reference}<br />
           <b>In-book reference: </b>{HadithRef[loop1].Book_Reference}</p>
           {/* eslint-disable-next-line */}
         <h6><HashLink to={'/UrduTranslationChapters/UrduTranslationChapter18' +'/#Hadith'+(loop1+1)} style={{ color:"black"}}>View Urdu Translation</HashLink></h6>
        {/* eslint-disable-next-line */}
         <h6><HashLink to={'/EnglishTranslationChapters/EnglishTranslationChapter18' +'/#Hadith'+(loop1+1)} style={{ color:"black"}}>View English Translation </HashLink></h6>
      </div>
         
           <div> 
             <table className='.tableContainer'>
               {/* Table Heading */}
              <thead>
                 <tr>
                   {checkBox_label_array1.map((item, index) => (
                   <th>{ checkBox_label_array1[index]}</th>
                    ))} 
                 </tr>
              </thead> 
             {/* Table Body */}
              <tbody>
                {TabelRowContent.slice(hadith1[loop1].Sindexlafz, hadith1[loop1].Eindexlafz+1).map((item2,index2) => (
         
                 <tr>
                  {/* include all lafz heading value in lafz.json  for wordbyword Grammer */}
                  { checkBox_label_array1.map((item, index) =>
                    (<td>{Whadith1[item2][checkBox_label_array1[index]]}</td>))}
                 </tr>
           
                ))} 
      
              </tbody>  
            </table>
           </div>
       </div>
        }
      </div>
      </div>))}
       
   </div>

  </div>
 
  <br />
     
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
           <button class="PreviousButton" type="button" onClick = {WordToWordTranslationChapter17} >View Previous Chapter</button>
           <div style={{ marginLeft: '700px' }}></div> {/* Add margin between buttons */}
        <button className="NextButton" type="button" onClick={WordToWordTranslationChapter19}>
          View Next Chapter
        </button>
      </div>
  </>
  )
}


