import React from 'react';
import './comment_body.css';
import HeaderText from '../header_text';


const com = [
  {
    img: "./img/ава2.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    u_name: "Sasha"
  },
  {
    img: "./img/ава1.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    u_name: "Ella"
  },
  {
    img: "./img/ава4.jpg",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    u_name: "Mari"
  },
  {
    img: "./img/ава3.jpg",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    u_name: "Drus"
  },
]

function Comment({ index }) {
  return (
    <div className="card_comment">
      <div>
        <img src={com[index].img} alt="ava" />
      </div>
      <div className="card_comment_text">
        <p>{com[index].text}</p>
        <h5>{com[index].u_name}</h5>
      </div>
    </div>
  );
}

function Slider() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === com.length - 1 ? 0 : current + 1
        return res})
    }, 8000)
    return () => clearInterval()
  }, [])
  const prevImgIndex = activeIndex ? activeIndex - 1 : com.length - 1;
  const nextImgIndex = activeIndex === com.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        <Comment index={prevImgIndex} />
      </div>
      <div className="slider-img" key={activeIndex}>
        <Comment index={activeIndex} />
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        <Comment index={nextImgIndex} />
      </div>
    </div>
  )
}

export default function BodyComment() {
  return (
    <div id="Feedback" className="contaner_comment">
      <HeaderText title="Testimony" text="You want results. We have found that the best way to get them is with up front" />
      <div className="comment__all">
        <Slider />
      </div>
      <button className="button_glass btn_comm" >Send</button>
    </div>
  );
}