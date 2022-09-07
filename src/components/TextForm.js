import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    function convertUpCase() {
        setText(text.toUpperCase());
        console.log("Uppertext converted");
    }
    function convertOnchange(event) {
        setText(event.target.value);
    }
  return (
    <>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} id="exampleFormControlInput1"  rows="5" placeholder="Enter your message" onChange={convertOnchange}/>
        <button className="btn btn-primary my-3"  onClick={convertUpCase}>Convert to Uppercase</button>
    </div>
    <p>Total Charactors: {text.length} and Total Words: {text.split(" ").length}</p>
    <div className="mb-3">
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>

  )
}
