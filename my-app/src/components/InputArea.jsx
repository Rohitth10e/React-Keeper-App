import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';


function InputArea(props) {

  const [isExpanded,setExpanded]=useState(false);  

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function updateNote(e){
    const {name,value}=e.target;

    setNote(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
  }

  function handleSubmit(e){
    console.log("clicked")
    e.preventDefault();
    props.onAdd(note);
    setNote({title:"",content:""})
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div className="inputArea">
      <form>
        {isExpanded ? <input name="title" placeholder="Title" onChange={updateNote} value={note.title}/> : null }
        <textarea name="content" placeholder="Take a note..." rows={isExpanded?3:1} onChange={updateNote} value={note.content} onClick={expand}/>
        <Zoom in={isExpanded}>
        <Fab className="button" onClick={handleSubmit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
