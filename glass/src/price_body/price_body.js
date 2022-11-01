import React from 'react';
import './price_body.css';

export default function Shoper() {
  const [listPrice, setListPrice] = React.useState([{
    "name": "Pomegranate",
    "price": 1400,
  },
  {
    "name": "Limone",
    "price": 999,
  },
  {
    "name": "Scrab",
    "price": 45,
  }
  ]);

  let sum = 0;
  listPrice.forEach((obj) => (sum = sum + obj.price));

  const [isShopPanel, setIsShopPanel] = React.useState(false);

  return (
    <div>
      <div onClick={() => setIsShopPanel(true)} className="shoper">
        <img src="./img/shopping.png" alt="img" />
      </div>
      <div onClick={() => setIsShopPanel(false)} className={`shoper2 ${isShopPanel ? 'on' : 'off'}`}>
        <h2>Shop</h2>

        <div className="price_item">
          <ul>
            {listPrice.map(obj => (
              <li className="item_line">
                <span>{obj.name}</span><span>{obj.price} РУБ.</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="price_summ">
          <div className="price_summ2">
            <span>ИТОГ:</span>
            <div></div>
            <span>{sum} РУБ.</span>
          </div>
          <button className="button_glass">Оплатить</button>
        </div>
      </div>
    </div>
  );
}
