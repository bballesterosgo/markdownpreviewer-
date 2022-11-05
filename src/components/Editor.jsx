import React from "react";

import '../stylesheet/Editor.css';

function Editor ({ input,changeInput }) {

  return <div className="editor-container">
    <textarea 
      id='editor'
      name="editor" 
      cols="30" 
      rows="10"
      onChange={changeInput}>
    </textarea>
  </div>
}

export default Editor;