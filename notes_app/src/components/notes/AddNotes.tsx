import { useEffect, useState } from "react";
import "./AddNotes.css"
import { NotesType,Priority } from "./notes-types";
import Card from "../card/card";

type AddNotesProp={
  addNotes : (note:NotesType) => void;
  editMode : boolean;
  NoteToBeEditted : NotesType | null;
  updateNote : (updatedNote:NotesType) => void
}
function AddNotes(props:AddNotesProp){
const [text,setText] = useState("");
const [priority,setPriority] = useState<Priority>("Low")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(props.editMode){
      props.NoteToBeEditted && props.updateNote({
        text,
        priority,
        id:props.NoteToBeEditted.id
      })
    }else{
      props.addNotes({
        text,
        priority,
        id:new Date().toTimeString()
      })
      
    }
    setText("")
      setPriority('Low')
   
  }

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setPriority(e.target.value as Priority)
  }

  const setNoteContent = (note:NotesType) => {
   setText(note.text)
   setPriority(note.priority)
  }

  useEffect(() => {
    if(props.NoteToBeEditted && props.editMode){
      setNoteContent(props.NoteToBeEditted)
    }
   }, [props.NoteToBeEditted , props.editMode]);

  return (
    <Card bgColor="gray">
    <form className="addNotes">
      <input type="text" placeholder="Add Notes" value={text} onChange={handleChange} />
      <select onChange={handleSelect} value={priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="formBtn" onClick={handleClick}>{props.editMode? "Edit" : "Add"}</button>
    </form>
    </Card>
  )
}

export default AddNotes;