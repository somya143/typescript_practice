import React, { useState } from 'react';
import './App.css';
import Notes from "./components/notes/notes";
import { Note } from "./components/notes/data";
import AddNotes from './components/notes/AddNotes';
import { NotesType } from './components/notes/notes-types';

function App() {
  const [notes,setNotes] = useState(Note)

  const addNotes = (note: NotesType) => {
   setNotes([note,...notes])
  }
  return (
    <div className="App">
     <h1>Learning Typescript with React</h1>
     <AddNotes addNotes={addNotes}></AddNotes>
     {
      notes.map(note=> <Notes key={note.id} text={note.text} priority={note.priority} />)
     }
     
    </div>
  );
}

export default App;
