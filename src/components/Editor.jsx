import React from "react";
import Preview from './Preview';

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
    <Preview 
      input={ input }/>
  </div>
}

export default Editor;