import React from "react";
import ReactDOM from "react-dom";

import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";
//import "highlight.js/styles/darcula.css";

import ReactQuill from "react-quill";
import { ClassNames } from "@emotion/react";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});

const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    ["bold", "italic", "underline", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
];

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `<code><pre>Input</pre></code>`,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <ReactQuill
        data={this.state.initialState}
        value={this.state.text}
        onChange={this.handleChange}
        theme="bubble"
        modules={modules}
        formats={formats}
      />
    );
  }
}

export default Editor;
