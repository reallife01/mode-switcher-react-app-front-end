// import React, { useContext } from "react";

// import "./Experience.css";
// const Experience = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className="experience" id='experience'>
//       <div className="achievement">
//         {/* darkMode */}
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
//         <span  style={{color: darkMode?'white':''}}>years </span>
//         <span>Experience</span>
//       </div>
//       <div className="achievement">
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
//         <span  style={{color: darkMode?'white':''}}>completed </span>
//         <span>Projects</span>
//       </div>
//       <div className="achievement">
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
//         <span  style={{color: darkMode?'white':''}}>companies </span>
//         <span>Work</span>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from 'react';
// import Feature from '../../components/feature/Feature';
// import './features.css';
import "./Experience.css";
import Feature from '../../components/Feature/Feature';
// import { themeContext } from "../../Context";


const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Experience = () => {
return (
  <div className="about__features section__padding" id="features">
    <div className="about__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
      <button className="c-button">Get Started</button>
    </div>
    <div className="about__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  );
};

export default Experience;

