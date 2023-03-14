import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[expand,setexpand] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;
    const target = event.target?event.target:event;

    target.style.height = `${target.scrollHeight}px`;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setexpand(false);
    event.preventDefault();
  }

  function expanded()
  {
    setexpand(true)
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          onClick={expanded}
          value={note.title}
          placeholder="Title"
        />
        {expand && <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand?"3":"1"}
          id="textar"
        />}
        {expand && <Zoom in={true}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;