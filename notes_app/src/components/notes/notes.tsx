import React from 'react'
import "./notes.css";
import { propsNotes } from "./notes-types"

const notes = (props : propsNotes) => {
  return (
    <div className={`note ${props.priority}`}>
        <h1>{props.text}</h1>
    </div>
  )
}

export default notes