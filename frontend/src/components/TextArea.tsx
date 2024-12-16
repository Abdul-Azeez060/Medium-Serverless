import React from "react";
interface TextAreaProps {
  onTitleChange: React.ChangeEventHandler<HTMLInputElement>;
  onContentChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function TextArea({ onTitleChange, onContentChange }: TextAreaProps) {
  return (
    <div className="flex flex-col m-10">
      <div>
        <input
          type="text"
          onChange={onTitleChange}
          id="large-input"
          placeholder="Title......"
          className="block w-screen max-w-5xl p-4 text-gray-900 border rounded-lg text-4xl focus:ring-gray-500 focus:border-gray-500 mb-5"
        />
      </div>
      <div>
        <textarea
          id="message"
          rows={4}
          onChange={onContentChange}
          className="block p-2.5 w-screen max-w-5xl text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your thoughts here..."></textarea>
      </div>
    </div>
  );
}

export default TextArea;
