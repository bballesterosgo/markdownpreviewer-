import React from "react";
import ReactMarkdown from "react-markdown";

import '../stylesheet/Editor.css';

function Editor ({ input,changeInput }) {

  return <div className="editor-container">
    <textarea 
      id='editor'
      name="editor" 
      cols="30" 
      rows="10"
      autoFocus
      value={input}
      onChange={changeInput}>
    </textarea>
    <ReactMarkdown source={input} className='markdown'/>
  </div>
}

export default Editor;