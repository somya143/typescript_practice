import React, { useState } from 'react';
import './App.css';
import Notes from "./components/notes/notes";
import { Note } from "./components/notes/data";
import AddNotes from './components/notes/AddNotes';
import { NotesType } from './components/notes/notes-types';

function App() {
  const [notes , setNotes] = useState(Note);
  const [editMode , setEditMode] = useState(false);
  const [noteToBeEditted , setNoteToBeEditted] = useState<NotesType | null>(null)

  const addNotes = (note: NotesType) => {
   setNotes([note,...notes])
   
  }
   
  const editNote = (id:string) => {
    console.log("edit" , id)
    setEditMode(true);
    let note = notes.find((note) => note.id === id);
    if(note){
      setNoteToBeEditted(note)
    }
  }

  const updateNote = (updatedNote:NotesType) => {
   let edit = notes.findIndex((note) => note.id === updatedNote.id);
   let editNote = [...notes];
   editNote.splice(edit,1,updatedNote)
   setNotes(editNote)
   setEditMode(false)
  }
  
  const onDelete = (id: string) => {
    let deleted = notes.filter((note) => note.id !== id)
    setNotes(deleted);
  }
  return (
    <div className="App">
     <h1>Learning Typescript with React -- Total Notes {[notes.length]}</h1>
     <AddNotes addNotes={addNotes} editMode={editMode} NoteToBeEditted={noteToBeEditted} updateNote={updateNote} ></AddNotes>
     {
      notes.map(note=> <Notes key={note.id} id={note.id} text={note.text} priority={note.priority} onDelete={onDelete} editNote={editNote} />)
     }
     
    </div>
  );
}

export default App;
