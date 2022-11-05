import React from "react";
import Preview from './Preview';

import '../stylesheet/Editor.css';

function Editor ({ input,changeInput }) {

  return <div className="editor-container">
    <h2>Editor</h2>
    <textarea 
      id='editor'
      className='editor'
      name="editor" 
      cols="30" 
      rows="10"
      autoFocus
      value={input}
      onChange={changeInput}>
    </textarea>
    <h2>Previewer</h2>
    <Preview 
      input={ input }/>
  </div>
}

export default Editor;