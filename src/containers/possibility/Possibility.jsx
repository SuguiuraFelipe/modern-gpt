import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>In ChatGPT, possibilities exceed imagination. It's not just a tool; it's a gateway to creativity and innovation. With advanced language skills, it empowers discovery and collaboration. From aiding research to sparking creativity, ChatGPT fuels progress. Its impact reminds us: knowledge knows no bounds.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
