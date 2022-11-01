import React from 'react';
import './card_body.css';
import HeaderText from '../header_text';

function Card({ title, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="button_glass btn_center">By now</div>
    </div>
  );
}

export default function CardBody() {
  return (
    <div id="Info" className="contaner_black">
      <img className="bg1" src="./img/list1.png" />
      <img className="bg2" src="./img/list1.png" />
      <HeaderText title="Why Choose Us" text="First Impressions is comprised of specialists with corporate and agency experience that hail from various backgrounds"/>
      <div className="contaner_card">
        <Card title="Attention to Details" text="It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget." />
        <Card title="A Plan for Success" text="You want results. We have found that the best way to get them is with up front research – of your company, competitors, target market and customer psychographics. Only after we fully understand you and your customers, do we recommend a plan of attack." />
        <Card title="Experts Only" text="First Impressions is comprised of specialists with corporate and agency experience that hail from various backgrounds. As such, First Impressions will never assign second-tier (or gasp! third tier!) support staff to any account." />
      </div>
    </div>
  );
}