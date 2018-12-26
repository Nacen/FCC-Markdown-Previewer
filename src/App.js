import React, { Component } from "react";
import "./App.css";

let marked = require("marked");
marked.setOptions({
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
class App extends Component {
  state = {
    value: `Markdown Syntax
# Heading
## Sub Heading
[Link to Google](https://www.google.com)

    This is a codeblock
> Blockquotes

1. List item

**Bold Text**

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

\`\`
  <div>Code Here</div>
\`\`

\`\`\`
// this is inline multi-line code:

let helloWorld = "Hello World";
console.log(helloWorld.split(" ").reverse().join(" "));

\`\`\`
`
  };

  onTextChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    let { value } = this.state;
    return (
      <div className="container">
        <div className="editor-container">
          <h2 className="label">Editor</h2>
          <textarea id="editor" onChange={this.onTextChange} value={value} />
        </div>
        <div className="preview-container">
          <h2 className="label">Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(value) }}
          />
        </div>
      </div>
    );
  }
}

export default App;
