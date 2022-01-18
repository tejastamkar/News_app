import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import "../../Styles/slider.css";
import { PreLoader } from "../Loader";

import { collection, getDocs } from "firebase/firestore";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img
            className="slide-image"
            src={slide.urlToImage}
            alt="slider_image"
          />
          <h4 className="slide-title">{slide.title}</h4>
          {/* <h3 className="slide-text">{slide.description}</h3> */}
        </div>
      ))}
    </section>
  );
}

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

function Slider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = items.length - 1;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  return items.length !== 0 ? (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={items} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={items}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  ) : (
    <PreLoader />
  );
}

export class Carousel extends React.Component {
  state = {
    Data: [],
    loading: true,
  };
  componentDidMount() {
    this.setState({ loading: false });
    const DbCollection = collection(db, "News");
    getDocs(DbCollection).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.Data.push({ ...doc.data(), id: doc.id });
        this.setState({ loading: true });
      });
    });
  }

  render() {
    return <Slider items={this.state.Data} />;
  }
}
