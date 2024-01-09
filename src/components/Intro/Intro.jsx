import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import Electronic from "../../img/Electronic.jpg";
// import boy from "../../img/boy.png";
import MilkyWay from "../../img/MilkyWay.jpg";
// import { useLottie } from "lottie-react";
import Lottie from "lottie-react";
import newWorldMap from "../../img/newWorldMap.json";
import glassesimoji from "../../img/glassesimoji.png";
// import EthereumRocket from "../../img/EthereumRocket.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {
  // Transition
  const transition = { duration: 28, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Let&apos;s us buy your crypto currencies  that you have </span>
          <span>
            <p>Never underestimate the power of the people you already know. Family, friends, coworkers and even acquaintances make a great foundation for your campaign community. Our guide will explain how to use your personal network to create a solid base for your crowdfunding audience. </p>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          {/* <button className="button i-button">Get Started</button> */}
          <Link to="/dashboard"><button className="button i-button">Get Started</button></Link>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        {/* <img src={Electronic} alt="" className="edit" /> */}
        <img src={MilkyWay} alt="" className="edit"/>
         {/* <img src={boy} alt="" /> */}
        <div className="lottieAnimation">
          <Lottie 
            animationData={newWorldMap} 
            
          />
        </div>
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="emojiGlass"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="We" text2="Buy Bitcoin" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "15rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Ethereum" text2="And More" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
