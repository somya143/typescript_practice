import { useState } from "react";
import "./AddNotes.css"
import { NotesType,Priority } from "./notes-types";

type AddNotesProp={
  addNotes : (note:NotesType) => void
}
function AddNotes(props:AddNotesProp){
const [text,setText] = useState("");
const [priority,setPriority] = useState<Priority>("Low")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.addNotes({
      text,
      priority,
      id:new Date().toTimeString()
    })
    setText("")
    setPriority('Low')
  }

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setPriority(e.target.value as Priority)
  }
  return (
    <>
    <form className="addNotes">
      <input type="text" placeholder="Add Notes" value={text} onChange={handleChange} />
      <select onChange={handleSelect} value={priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="formBtn" onClick={handleClick}>Add</button>
    </form>
    </>
  )
}

export default AddNotes;