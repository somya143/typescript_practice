import React from 'react'
import "./notes.css";
import { Color, Priority } from "./notes-types"
import Card from '../card/card';
import { FaTrash,FaEdit } from "react-icons/fa"

type propsNotes = {
  id:string,
  text : string,
  priority? : Priority,
  onDelete: (id:string) => void
  editNote: (id:string) => void
}
const Notes = (props : propsNotes) => {

  const handleEdit = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
   e.preventDefault();
   props.editNote(props.id)
  }
  const handleDelete = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
   e.preventDefault();
   props.onDelete(props.id)
  }
  return (
    <Card bgColor={props.priority && Color[props.priority]} height='5rem' width='60%' margin='auto' marginBottom='1rem'>
    <>
    <div>
        <h1>{props.text}</h1>
    </div>
    <div className='.right-corner'>
     <FaEdit onClick={handleEdit} />
     <FaTrash onClick={handleDelete} />
    </div>
    </>
    </Card>
  )
}

export default Notes