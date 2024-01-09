import React, { useContext } from "react";
import './feature.css';
import { themeContext } from "../../Context";

const Feature = ({ title, text }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
  <div className="about__features-container__feature">
    <div className="about__features-container__feature-title">
      <div />
      <h1 style={{ color: darkMode ? "white" : "" }} >{title}</h1>
    </div>
    <div className="about__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  );
}
export default Feature;
