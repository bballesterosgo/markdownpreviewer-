import React from "react";
import { marked } from "marked";

import '../stylesheet/Preview.css';

function Preview ({ input }){
  
return <div id='preview' 
            className='preview-container' 
            dangerouslySetInnerHTML={{
              __html: marked(input)
              }}>
      </div>
}

export default Preview;