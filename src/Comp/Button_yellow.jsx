import React from 'react'
import Arrow_yellow from "../SVG/Arrow_yellow.svg";

function Button_yellow(props) {
  return (
    <div className='flex justify-center mt-7'>
      <button className="Enquire-Now-yellow text-white text-base font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">{props.title} <img src={Arrow_yellow} alt="Arrow" className='arrow-ml' /> </button>
    </div>
  )
}

export default Button_yellow
