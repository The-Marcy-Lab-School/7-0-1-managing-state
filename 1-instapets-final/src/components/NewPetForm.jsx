import { useState } from "react";

const NewPetForm = ({ addPicture }) => {

  const [src, setSrc] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // we could grab e.target.src and e.target.caption
    // or we can just use the state values

    console.log(src, caption);
    addPicture(src, caption);

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="src-input">Image Source:</label>
      <input
        type="text"
        name="src"
        id="src-input"
        value={src}
        onChange={(e) => setSrc(e.target.value)}
      />
      <label htmlFor="caption-input">Caption:</label>
      <input
        type="text"
        name="caption"
        id="caption-input"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default NewPetForm;