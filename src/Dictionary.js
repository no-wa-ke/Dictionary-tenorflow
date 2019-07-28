import React from "react";

import { Media } from 'reactstrap';

import "./styles.css";
// import wiki from "wikij



class Dictionary extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      word: // 20190723223555
      // https://googledictionaryapi.eu-gb.mybluemix.net/?define=person&lang=en
      [
        {
          "name": '/m/01g317', 
          "id": 1,
          "bg" : "https://vrijheidindezorg.nl/wp-content/uploads/2017/05/organen.jpg",
          "word": "person",
          "phonetic": "/ˈpəːs(ə)n/",
          "meaning": {
            "noun": [
              {
                "definition": "A human being regarded as an individual.",
                "example": "the porter was the last person to see her prior to her disappearance",
                "synonyms": [
                  "human being",
                  "individual",
                  "man",
                  "woman",
                  "human",
                  "being",
                  "living soul",
                  "soul",
                  "mortal",
                  "creature",
                  "fellow"
                ]
              },
              {
                "definition": "A category used in the classification of pronouns, possessive determiners, and verb forms, according to whether they indicate the speaker (first person), the addressee (second person), or a third party (third person)."
              },
              {
                "definition": "Each of the three modes of being of God, namely the Father, the Son, or the Holy Ghost, who together constitute the Trinity."
              }
            ]
          }
        },
      ],

    }
    console.log("Dictionary",this.state);   
  
  };


  
  render() {

    const {word} = this.state;
    // const { dev } = this.state;

    let result = word.map((entry, index) => {

      return (
          <li key={index}>
            <Media>
              <img src={entry.bg} alt=""></img>
            </Media>
            <h3>{entry.word}</h3>
            <h3>{entry.phonetic}</h3>
              {/* <h3>{entry.origin}</h3> */}
            <h3>Example:</h3>
            <h3>{entry.meaning.noun[0].example}</h3>
            <h3>{entry.meaning.noun[0].synonyms}</h3>
          </li>
      );
        
    });
    return (
      <div>
        <ul>{result}</ul>
      </div>
      );
  }
}

export default Dictionary;

