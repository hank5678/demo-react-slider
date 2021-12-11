import { useState } from "react"
import classNames from "classnames"
import arrowLeft from "./images/arrow-left.svg"
import arrowRight from "./images/arrow-right.svg"

import "./Slider.css"

export default function Slider({ data }) {
  const [currentId, setCurrentId] = useState(0)

  const next = () => {
    setCurrentId((currentId) => (data.length - 1 > currentId ? currentId + 1 : 0))
  }

  const prev = () => {
    setCurrentId((currentId) => (currentId > 0 ? currentId - 1 : data.length - 1))
  }

  const jumpTo = (id) => {
    setCurrentId(id)
  }

  return (
    <div className="slider">
      {data.map((el, id) => (
        <div className={classNames("slider-slide", { "slider-slide-active": currentId === id })} key={el.key}>
          <img className="slider-img" src={el.src} alt="" />
        </div>
      ))}
      <div className="slider-dots">
        {data.map((el, id) => (
          <div onClick={jumpTo.bind(this, id)} className={classNames("slider-dot", { "slider-dot-active": currentId === id })} />
        ))}
      </div>
      <button className="slider-prev" onClick={prev}>
        <img src={arrowLeft} alt="" />
      </button>
      <button className="slider-next" onClick={next}>
        <img src={arrowRight} alt="" />
      </button>
    </div>
  )
}
