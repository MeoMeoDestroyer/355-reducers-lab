import { createContext, useContext, useReducer } from "react";

import { editorReducer, initialEditor } from "../state/editorReducer.js";

const EditorContext = createContext(null);

export function EditorProvider({ children }) {
  const [editor, dispatch] = useReducer(editorReducer, initialEditor);

  return (
    <EditorContext.Provider value={{ editor, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);

  // Catches a component being rendered outside <EditorProvider>
  if (context === null) {
    throw new Error("useEditor must be used inside <EditorProvider>");
  }

  return context;
}