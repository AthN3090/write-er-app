import React, { useMemo } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
function TextEditor({body, setBody}) {
  const options = useMemo(() => {
    return {
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "code",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "|",
        "preview",
        "fullscreen",
        "guide"
      ],
      maxHeight: "400px"
    };
  }, []);
    return (
      <SimpleMdeReact className="bg-prose max-w-none prose prose-pre:text-black" value={body} onChange={setBody}  options={options}/>















      // <div data-color-mode="light">
      // <MDEditor
      //   preview="edit"
      //   value={body}
      //   height={'600px'}
      //   onChange={setBody}
      // />
      // </div>
      );
}

export default TextEditor;