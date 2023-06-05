import React from 'react'
import "./card.css";

type CardProp = {
    children : JSX.Element;
    bgColor? : string;
    height? : string;
    width? : string;
    margin? : string;
    marginBottom? : string
}
const Card = (props:CardProp) => {
  return (
    <div className='card' style={{backgroundColor:props.bgColor,height:props.height, width:props.width, margin:props.margin, marginBottom:props.marginBottom}}>
     {props.children}
    </div>
  )
}

export default Card