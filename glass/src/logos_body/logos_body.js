import React from 'react';
import './logos_body.css';

export default function BodyGreen() {
  return (
    <div id="Services" className="contaner_green">
      <div className="contaner_green_right">
        <div className="waprs_logo">
          <img className="logo_eco" src="./img/logo_1.png" alt="img" />
          <img className="logo_eco" src="./img/logo_2.png" alt="img" />
          <img className="logo_eco" src="./img/logo_3.png" alt="img" />
          <img className="logo_eco" src="./img/logo_4.png" alt="img" />
        </div>
      </div>
      <div className="contaner_green_left">
        <p>“…specializes in turning nerdily encyclopedic pop-cultural knowledge into gorgeous, richly detailed infographics”</p>
      </div>
    </div>
  );
}
