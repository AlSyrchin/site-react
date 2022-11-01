import React from 'react';
import './photo_body.css';
import ContentLoader from 'react-content-loader';
import HeaderText from '../header_text';

const cats = [
  { "name": "All" },
  { "name": "Fruit" },
  { "name": "Nature" },
  { "name": "Animals" }
];
const sceket = [
  { "id": 1 },
  { "id": 2 },
  { "id": 3 },
  { "id": 4 }
];

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="6" ry="6" width="300" height="200" />
    <rect x="0" y="220" rx="6" ry="6" width="300" height="50" />
    <rect x="0" y="280" rx="6" ry="6" width="300" height="30" />
  </ContentLoader>
);

function Collection({ name, images, text, price, addArr }) {
  return (
    <div>
      <div className="collection__card">
        <img className="collection__img" src={images} alt="img" />
        <h4>{name}</h4>
        <p>{text}</p>
        <button onClick={addArr} className="button_glass btn_shop">Add to card ● {price} РУБ.</button>
      </div>
    </div>
  );
}

export default function AppPhoto() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [isLoading, setisLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);
  React.useEffect(() => {
    setisLoading(true);
    const category = categoryId ? `category=${categoryId}` : '';
    fetch(`https://631b9260fae3df4dcf02320a.mockapi.io/Test1?${category}`,)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => { console.warn(err); })
      .finally(() => setisLoading(false));
  }, [categoryId]);

  return (
    <div id="Product" className="product-contaner">
      <HeaderText title="Top Product" text="It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest." />
      <div className="content__tags">
        <ul className="tags">
          {cats.map((obj, i) =>
            <li onClick={() => setCategoryId(i)} className={categoryId === i ? 'active' : ''} key={obj.name}>{obj.name}</li>)}
        </ul>
      </div>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className="content__search"
        placeholder="Search..." />
      <div className="content__card">
        {isLoading ? (sceket.map(obj => (
          <Skeleton key={obj.id} />)))
          : (
            collections
              .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Collection
                  key={index}
                  name={obj.name}
                  images={obj.photos}
                  text={obj.text}
                  price={obj.price} />
              ))
          )}
      </div>
    </div>
  );
}