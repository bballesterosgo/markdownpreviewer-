import React,{ useState }from "react";
import Editor from "./Editor";



import '../stylesheet/Markdown.css';


function Markdown(){

const [input,setInput] = useState('');

const changeInput = e => (
  setInput(e.target.value)
);

  return <div>
    <Editor 
      input={ input }
      changeInput={changeInput}/>
  </div>
}

export default Markdown