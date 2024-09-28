import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { notes } from "./notes";
import InputArea from "./components/InputArea";
import { useState } from "react";

function App() {
  const [noteContainer, setNoteContainer] = useState([
    {
      key: 1,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
    },
    {
      key: 2,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
    }
  ]);

  function updateNoteContainer(note){
    setNoteContainer((prev)=>[
      ...prev,
      {
        key:prev.length+1,
        title:note.title,
        content:note.content
      }
    ]);
  }

  function deleteNote(id){
    console.log(id)
    setNoteContainer((prev)=>prev.filter((item)=>item.key!==id))
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={updateNoteContainer} />
      <h1 className="notes-head">Your notes</h1>
      <div className="card-container">
        {noteContainer.map((note) => {
          return (
            <Card key={note.key} id={note.key} title={note.title} content={note.content} onCheck={deleteNote} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
