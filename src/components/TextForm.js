import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <strong>{text.split(" ").length}</strong> words and{" "}
          <strong>{text.length} </strong>
          characters
        </p>
        <p>
          <strong>{Math.ceil(text.split(" ").length * 0.008)}</strong> minutes
          read
        </p>
        <h2>Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
