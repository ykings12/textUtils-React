import React ,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text,setText]= useState("");
    // text="new Text"; //wrong way to change text
    //setText("new Text");  //correct way to set text


    const handleUpClick=()=>{
        // console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
        
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearText=()=>{
        let newText="";
        setText(newText);
        props.showAlert("All text cleared!","success");

    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);

    }

    const spaceCount=()=>{
        let cnt=0;
        for(let i=0;i<text.split(" ").length();i++){
            if(text.split(" ")[i]==='')cnt++;
        }
        return text.split(" ").length-cnt;
    }
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
                <h1>Your Text Summary</h1>
                <p>{text.trim.length>0?text.trim().split(" ").length:"0"} words and {text.trim().length} characters</p>
                <p>{0.008 * text.length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}


TextForm.protoTypes={
    heading: PropTypes.string
}