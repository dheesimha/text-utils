import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase !", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared !", "success");
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
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>

        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear text
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
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
