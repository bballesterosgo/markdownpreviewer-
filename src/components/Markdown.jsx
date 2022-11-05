import React,{ useState }from "react";
import Editor from "./Editor";



import '../stylesheet/Markdown.css';
import { marked } from "marked";


function Markdown(){

const [input,setInput] = useState(`
# h1
## h2
[title](https://example.com)

\`code\`
\`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
\`\`\`
 - First item
 - Second item
 - Third item

> blockquote

![alt text](image.jpg)

**bold text**
`);

marked.setOptions({
  breaks: true
})

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