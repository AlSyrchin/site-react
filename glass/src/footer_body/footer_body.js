import React from 'react';
import './footer_body.css';

const footer_colum = [
  {
    title: "About",
    clone: ["Our Story", "Collaborations", "Wholesale"]
  },
  {
    title: "Help",
    clone: ["FAQ", "Returns & Refunds", "Contact Us", "Refer"]
  },
  {
    title: "Follow Us",
    clone: ["Telegram", "Facebook", "Instagram", "VK"]
  }
];

function Footer_list({ index }) {
  return (
    <div>
      <h3>{footer_colum[index].title}</h3>
      <ul className="link_list">
        {footer_colum[index].clone.map((i) =>
          <li key={i}><a href="#">{i}</a></li>)
        }
      </ul>
    </div>
  );
}

export default function ListFooter() {
  return (
    <div className="contaner-footer">
      <div className="content_box">
        <div className="box__text_row">
          <Footer_list index={0} />
          <Footer_list index={1} />
          <Footer_list index={2} />
        </div>
        <img className="box__logo" src="./img/logo.png" alt="img" />
      </div>
      <footer>
        <p>© 2022 Pop Chart. All rights reserved. Privacy Policy. Site by Pointer</p>
      </footer>
    </div>
  );
}
