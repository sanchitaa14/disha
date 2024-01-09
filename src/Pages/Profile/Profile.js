// EducationComponent.js

import React from 'react';
import './Profile.css'; // Import your CSS file

class EducationComponent extends React.Component {
  constructor(props) {
    super(props);

    // Define the state to manage language links dynamically
    this.state = {
      languages: [
        { name: 'Spanish', link: 'https://www.youtube.com/watch?v=qE-03EATjho&ab_channel=LearnSpanishwithSpanishPod101.com' },
        { name: 'English', link: 'https://www.youtube.com/watch?v=3NMXtItuwtU&ab_channel=warikoo' },
        { name: 'German', link: 'https://www.youtube.com/watch?v=RuGmc662HDg&list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW&ab_channel=LearnGerman' },
        { name: 'French', link: 'https://www.youtube.com/watch?v=91lIllsNR6c&list=PLfDmeEHel1x3o_e4UjWXR4kClH7ZfAgZ9&ab_channel=lingoniFRENCH' },
        { name: 'Italian', link: 'https://www.youtube.com/watch?v=EG9x0eevbV4&list=PLUcDBadaP5IUJYW6qn2jTH0Ik2EMvAPze&ab_channel=ItalyMadeEasy' },
        { name: 'Korean', link: 'https://www.youtube.com/watch?v=sx0yyQqkpqo&list=PLbFrQnW0BNMUkAFj4MjYauXBPtO3I9O_k&ab_channel=LearnKoreanwithGO%21BillyKorean' },
      ],
    };
  }

  render() {
    return (
      <div className="edu-links">
        <h1>Learn new languages from here.</h1>
        <div className="all-links">
          {this.state.languages.map((language, index) => (
            <div key={index} className={`edu-link${index + 1}`}>
              <p>{language.name}</p>
              <a href={language.link} target="_blank" rel="noopener noreferrer">
                {language.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EducationComponent;
