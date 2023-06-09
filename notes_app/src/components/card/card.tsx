import React, {useContext} from 'react'
import "./card.css";
import { ThemeContext } from '../../context/Theme';

type CardProp = {
    children : JSX.Element;
    bgColor? : string;
    height? : string;
    width? : string;
    margin? : string;
    marginBottom? : string
}
const Card = (props:CardProp) => {
const theme = useContext(ThemeContext)

  return (
    <div className={`card ${theme}`} style={{backgroundColor:props.bgColor,height:props.height, width:props.width, margin:props.margin, marginBottom:props.marginBottom}}>
     {props.children}
    </div>
  )
}

export default Card